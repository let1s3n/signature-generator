import React, { Component } from "react";
import $ from "jquery";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <img id="logo" src={require("./logoBela.png")} alt="Logo"/>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s10">
              <div className="row">
                <div className="col s6 offset-s2">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
