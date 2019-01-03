import React, { Component } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
            <img src={require("./logoBela.png")} />
            </a>
            
          </div>
        </nav>


        <div className="container">
          <div className="row">
            <div className="col s10 push-s1">
              <div className="row">
                <div className="col s6 offset-s3">
                  <Form/>
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
