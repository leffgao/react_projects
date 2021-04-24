import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';

const App = () => {
  const [lyricsItem, setLyricsItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const lyricsFunction = async () => {
    try {
      const data = await axios
      .get(`https://api.lyrics.ovh/v1/Eminem/Godzilla`)
      .then(res => {
        console.log(res);
        setLyricsItem(res.data.lyrics);
      });
      setLoading(true);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    lyricsFunction()
  }, [])

  return (
    <div className="App">
      {loading ? lyricsItem : <ReactBootStrap.Spinner animation="border" variant="success" />}
    </div>
  );
}

export default App;
