import React from "react";
import $ from "jquery";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

export default class Form extends React.Component {
  /* componentDidMount = () => {
    $(document).ready(function() {
      $('select').formSelect();
    });
  }; */
  /* componentDidMount = () => {
    $(document).ready(function() {
      $("select").on("change", function() {
        if ($(this).val()) {
          return $(this).css("color", "black");
        } else {
          return $(this).css("color", "red");
        }
      });
    });
  }; */

  render() {
    return (
      <div className="row main" /* style={{ border: "1px solid green" }} */>
        <div className="title" /* style={{ border: "1px solid brown" }} */>
          <h2 className="signature-generator">Signature Generator</h2>
        </div>
        <div className="divider" />
        <div
          id="subtitle"
          className="subtitle" /* style={{ border: "1px solid red" }} */
        >
          <h6 className="fill-in-your-informa">
            Fill in your information to generate your email signature
          </h6>
        </div>

        <form
          className="col s12"
          id="myForm"
          /* style={{ border: "1px solid orange" }} */
        >
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="Enter your full name"
                id="first_name"
                type="text"
                className="validate"
              />
              <label className="active" for="first_name">
                Full Name *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <select className="validate" required>
                <option id="zxc" value="" disabled selected>
                  Type or select your position
                </option>
                <option value="1">UX Designer</option>
                <option value="2">UI Designer</option>
                <option value="3">Option 3</option>
                <option value="3">Option 4</option>
                <option value="3">Option 5</option>
                <option value="3">Option 6</option>
              </select>
              <label id="word">Position *</label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="email@belatrixsf.com"
                id="email"
                type="email"
                className="validate"
                name="email"
              />
              <label
                className="active"
                for="email"
                data-error="Please add @"
                required="required"
                aria-required="true"
              >
                Email *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="Enter your Skype ID"
                id="first_name"
                type="text"
                className="validate"
              />
              <label className="active" for="first_name">
                Skype ID *
              </label>
            </div>
          </div>

          <div className="row email-services-section">
            <div className="col s12">
              <div className="row">
                <div className="col s12">
                  <span className="email-service-span">
                    For which email service?
                  </span>
                </div>
              </div>
              <div className="email-service-container">
                <div className="row-buttons">
                  <div className="col s12">
                    <div className="rectangle">
                      <a className="btn-flat">
                        <img src={require("./gmail.png")} alt="" />
                        <span className="button-text">Gmail</span>
                      </a>
                    </div>

                    <div className="rectangle">
                      <a className="btn-flat">
                        <img src={require("./outlook.png")} alt="" />
                        <span className="button-text">Outlook</span>
                      </a>
                    </div>
                    <div className="rectangle">
                      <a id="asd" className="btn-flat">
                        <img src={require("./roundcube.png")} alt="" />
                        <span className="button-text">Roundcube</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-final-container">
            <button
              className="button-final btn-flat"
              type="submit"
              name="action"
            >
              GENERATE SIGNATURE
            </button>
          </div>
        </form>
      </div>
    );
  }
}
