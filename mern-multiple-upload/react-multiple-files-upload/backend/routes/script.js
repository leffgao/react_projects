// parses slp files into mongo db

const { default: SlippiGame, generateOverallStats } = require('@slippi/slippi-js');
const { match } = require('assert');
const fs = require('fs');

var MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://slpuser:slppassword@mongoslp.ginsc.mongodb.net";

function parse_slp(filename, arr){
  try {
    var game = new SlippiGame(filename);

    // Get game settings – stage, characters, etc
    var settings = game.getSettings();
    // Get metadata - start time, platform played on, etc
    var metadata = game.getMetadata();
    // Get computed stats - openings / kill, conversions, etc
    var stats = game.getStats();
    // Get frames – animation state, inputs, etc
    const frames = game.getFrames();

    var p0_conversions = [];
    var p1_conversions = [];
  
    for (let index = 0; index < stats.conversions.length; index++) {
      if(stats.conversions[index].playerIndex == 0){
        p0_conversions.push(stats.conversions[index]);
      }else if(stats.conversions[index].playerIndex == 1){
        p1_conversions.push(stats.conversions[index]);
      }
    }
  
    var p0_stocks = [];
    var p1_stocks = [];
  
    for (let index = 0; index < stats.stocks.length; index++) {
      if(stats.stocks[index].playerIndex == 0){
        p0_stocks.push(stats.stocks[index]);
      }else if(stats.stocks[index].playerIndex == 1){
        p1_stocks.push(stats.stocks[index]);
      }
    }
  
    var stage_dict = {
      2 : "FOUNTAIN_OF_DREAMS",
      3 : "POKEMON_STADIUM",
      4 : "PEACHS_CASTLE",
      5 : "KONGO_JUNGLE",
      6 : "BRINSTAR",
      7 : "CORNERIA",
      8 : "YOSHIS_STORY",
      9 : "ONETT",
      10 : "MUTE_CITY",
      11 : "RAINBOW_CRUISE",
      12 : "JUNGLE_JAPES",
      13 : "GREAT_BAY",
      14 : "HYRULE_TEMPLE",
      15 : "BRINSTAR_DEPTHS",
      16 : "YOSHIS_ISLAND",
      17 : "GREEN_GREENS",
      18 : "FOURSIDE",
      19 : "MUSHROOM_KINGDOM",
      20 : "MUSHROOM_KINGDOM_2",
      22 : "VENOM",
      23 : "POKE_FLOATS",
      24 : "BIG_BLUE",
      25 : "ICICLE_MOUNTAIN",
      26 : "ICETOP",
      27 : "FLAT_ZONE",
      28 : "DREAMLAND",
      29 : "YOSHIS_ISLAND_N64",
      30 : "KONGO_JUNGLE_N64",
      31 : "BATTLEFIELD",
      32 : "FINAL_DESTINATION"
    }
  
    var char_dict = {
      0 : "CAPTAIN_FALCON",
      1 : "DONKEY_KONG",
      2 : "FOX" ,
      3 : "GAME_AND_WATCH",
      4 : "KIRBY",
      5 : "BOWSER",
      6 : "LINK",
      7 : "LUIGI",
      8 : "MARIO",
      9 : "MARTH",
      10 : "MEWTWO",
      11 : "NESS",
      12 : "PEACH",
      13 : "PIKACHU",
      14 : "ICE_CLIMBERS",
      15 : "JIGGLYPUFF",
      16 : "SAMUS",
      17 : "YOSHI",
      18 : "ZELDA",
      19 : "SHEIK",
      20 : "FALCO",
      21 : "YOUNG_LINK",
      22 : "DR_MARIO",
      23 : "ROY",
      24 : "PICHU",
      25 : "GANONDORF"
    }

    function check_complete(stats){
      var player0_stocks_lost = 0;
      var player1_stocks_lost = 0;

      for (let i = 0; i < stats.stocks.length; i++) {
          switch(stats.stocks[i].playerIndex){
              case 0:
                  player0_stocks_lost++;
                  break;
              case 1:
                  player1_stocks_lost++;
                  break;
          }      
      }



      if(player0_stocks_lost != 4 && player1_stocks_lost != 4 && stats.lastFrame != 28800){
          return false;
      }else{
          return true;
      }
    }

    function check_winner(stats){

        var player_zero_percent;
        var player_one_percent;
        var winner;

        // set last stocks final percent
        for (let i = 0; i < stats.stocks.length; i++) {
            if(stats.stocks[i].playerIndex == 0){
                player_zero_percent == stats.stocks[i].currentPercent;
            }else if(stats.stocks[i].playerIndex == 1){
                player_one_percent == stats.stocks[i].currentPercent;
            }
        }

        if(stats.overall[0].killCount == 4){
            winner = 0;
        }else if(stats.overall[1].killCount == 4){
            winner =  1;
        }else if(metadata.lastFrame == 28800){
            if(stats.overall[0].killCount > stats.overall[1].killCount){
                winner =  0;
            }else if(stats.overall[0].killCount < stats.overall[1].killCount){
                winner =  1;
            }else if(stats.overall[0].killCount == stats.overall[1].killCount){
                if(player_zero_percent > player_one_percent){
                    winner = 1;
                }else if(player_zero_percent < player_one_percent){
                    winner = 0;
                }else if(player_zero_percent = player_one_percent){
                    winner = 2;
                }
            }
        }else{
            winner = 3;
        }

        switch(winner){
            case 0:
                return metadata.players[0].names.code;
            case 1:
                return metadata.players[1].names.code;
            case 2:
                return "DRAW";
            case 3:
                return "INCOMPLETE"

        }
    }
  
    function l_cancel_percentage(player_index){
    
      var failed = 0;
      var successful = 0;
  
      for (let i = 0; i < stats.lastFrame; i++) {
          for (let j = 0; j < frames[i].players.length; j++) {
              if(frames[i].players[j].post.lCancelStatus == 1){
                  if(frames[i].players[j].post.playerIndex == player_index){
                      ++successful;
                  }
              }else if(frames[i].players[j].post.lCancelStatus == 2){
                  if(frames[i].players[j].post.playerIndex == player_index){
                      ++failed;
                  }
              }
          }
      }
  
      var l_cancel_percentage = (successful / (successful + failed)) * 100;
      return Math.round(l_cancel_percentage);
    }

    var myobj = {
      settings: {
        isTeams: settings.isTeams,
        isPal: settings.isPAL,
        stageId: settings.stageId,
        stageString: stage_dict[settings.stageId],
      },
      metadata: {
        startAt: metadata.startAt,
        lastFrame: metadata.lastFrame,
        minutes: stats.overall[0].inputsPerMinute.total,
        game_complete: check_complete(stats),
        winner: check_winner(stats)
      },
      players: [
        {
          playerIndex: settings.players[0].playerIndex,
          characterId: settings.players[0].characterId,
          characerColor: settings.players[0].characterColor,
          code: metadata.players[0].names.code,
          characterString: char_dict[settings.players[0].characterId],
          actionCounts: {
            wavedashCount: stats.actionCounts[0].wavedashCount,
            wavelandCount: stats.actionCounts[0].wavelandCount,
            airDodgeCount: stats.actionCounts[0].airDodgeCount,
            dashDanceCount: stats.actionCounts[0].dashDanceCount,
            spotDodgeCount: stats.actionCounts[0].spotDodgeCount,
            ledgegrabCount: stats.actionCounts[0].ledgegrabCount,
            rollCount: stats.actionCounts[0].rollCount
          },
          conversions: p0_conversions,
          inputCounts: {
            buttons: stats.overall[0].inputCounts.buttons, // digital inputs
            triggers: stats.overall[0].inputCounts.triggers,
            cstick: stats.overall[0].inputCounts.cstick,
            joystick: stats.overall[0].inputCounts.joystick,
            total: stats.overall[0].inputCounts.total // total inputs
          },
          conversionCount: stats.overall[0].conversionCount,
          totalDamage: stats.overall[0].totalDamage,
          killCount: stats.overall[0].killCount,
          successfulConversions: stats.overall[0].successfulConversions.count,
          openings: stats.overall[0].openingsPerKill.count,
          neutralWins: stats.overall[0].neutralWinRatio.count,
          counterHits: stats.overall[0].counterHitRatio.count,
          trades: stats.overall[0].beneficialTradeRatio.count,
          deathCount: stats.overall[1].killCount,
          lcancelPercent: l_cancel_percentage(0),
          stocks: p0_stocks
        },
        {
          playerIndex: settings.players[1].playerIndex,
          characterId: settings.players[1].characterId,
          characerColor: settings.players[1].characterColor,
          code: metadata.players[1].names.code,
          characterString: char_dict[settings.players[1].characterId],
          actionCounts: {
            wavedashCount: stats.actionCounts[1].wavedashCount,
            wavelandCount: stats.actionCounts[1].wavelandCount,
            airDodgeCount: stats.actionCounts[1].airDodgeCount,
            dashDanceCount: stats.actionCounts[1].dashDanceCount,
            spotDodgeCount: stats.actionCounts[1].spotDodgeCount,
            ledgegrabCount: stats.actionCounts[1].ledgegrabCount,
            rollCount: stats.actionCounts[1].rollCount
          },
          conversions: p1_conversions,
          inputCounts: {
            buttons: stats.overall[1].inputCounts.buttons, // digital inputs
            triggers: stats.overall[1].inputCounts.triggers,
            cstick: stats.overall[1].inputCounts.cstick,
            joystick: stats.overall[1].inputCounts.joystick,
            total: stats.overall[1].inputCounts.total // total inputs
          },
          conversionCount: stats.overall[1].conversionCount,
          totalDamage: stats.overall[1].totalDamage,
          killCount: stats.overall[1].killCount,
          successfulConversions: stats.overall[1].successfulConversions.count,
          openings: stats.overall[1].openingsPerKill.count,
          neutralWins: stats.overall[1].neutralWinRatio.count,
          counterHits: stats.overall[1].counterHitRatio.count,
          trades: stats.overall[1].beneficialTradeRatio.count,
          deathCount: stats.overall[0].killCount,
          lcancelPercent: l_cancel_percentage(1),
          stocks: p1_stocks
        }
      ],
    };
  
    arr.push(myobj);
  } catch (error) {
    console.log("Error parsing: " + filename);
    failed_inserts.push(filename);
  }
}

var obj_arr = [];
var failed_inserts = [];
var count = 0;

function parse_folder(folder){
  fs.readdirSync(folder).forEach(file => {
    console.log("Parsing: " + file);

    parse_slp(folder + file, obj_arr);
    count++;
  });

  if (obj_arr.length === 0) {
    console.log("Nothing to insert!")
  }else{
    const insertMongo = async() =>{
      const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      // specify the DB's name
      const db = client.db('mongoslp');
      // execute find query
      const items = await db.collection('matches').insertMany(obj_arr, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log("Failed inserts: " + (count - res.insertedCount));
        console.log(failed_inserts);
        client.close();
      });
    }
  
    insertMongo();
  }
  
}

module.exports = {
  parse_folder: function(folder){
    fs.readdirSync(folder).forEach(file => {
      console.log("Parsing: " + file);
  
      parse_slp(folder + file, obj_arr);
      count++;
    });
  
    if (obj_arr.length === 0) {
      console.log("Nothing to insert!")
    }else{
      const insertMongo = async() =>{
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        // specify the DB's name
        const db = client.db('mongoslp');
        // execute find query
        const items = await db.collection('matches').insertMany(obj_arr, function(err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          console.log("Failed inserts: " + (count - res.insertedCount));
          console.log(failed_inserts);
          client.close();

          obj_arr = [];
          count = 0;  
        });    
      } 
      insertMongo();     
    }    
  }
}
