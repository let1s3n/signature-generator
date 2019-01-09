import React from "react";

export default class Form extends React.Component {
  state = {
    fullname: "",
    position: "",
    email: "",
    skypeID: "",
    emailService: ""
  };
  
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
              <label id="word" className="active word" for="first_name">
                Full Name *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                placeholder="Type or select your position"
                id="first_name"
                type="text"
                className="validate"
                
              />
              <label className="active" for="first_name">
                Position *
              </label>
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
              <label className="active" for="email" data-error="Please add @" required="required"
                aria-required="true">
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
                    <a className="btn-flat disabled">
                      <img src={require("./gmail.png")} alt="" />
                      <span className="button-text">Gmail</span>
                    </a>
                  </div>

                  <div className="rectangle">
                    <a className="btn-flat disabled">
                      <img src={require("./outlook.png")} alt="" />
                      <span className="button-text">Outlook</span>
                    </a>
                  </div>
                  <div className="rectangle">
                    <a className="btn-flat disabled">
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
          <button className="button-final btn-flat" type="submit" name="action">GENERATE SIGNATURE</button>
          </div>

        </form>
      </div>
    );
  }
}
