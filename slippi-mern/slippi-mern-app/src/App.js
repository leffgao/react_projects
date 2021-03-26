import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import ViewWrapped from "./components/view-wrapped.component";
import SlpUpload from "./components/slp-upload.component";

import logo from "./mylogo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="30" height="30" alt="/" class="d-inline-block align-top"/>
              Slippi Wrapped
            </Link>
            <div className="collpase navbar-collapse" class="topnav-right">
              <ul className="navbar-nav mr-auto">
                <form class="form-inline">
                  <button class="btn btn-outline-success" type="button">View Wrapped</button>
                </form>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={SlpUpload} />
          <Route path="/create" component={ViewWrapped} />
        </div>
      </Router>
    );
  }
}

export default App;