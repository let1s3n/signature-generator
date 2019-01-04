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
      <div className="row row-form">
        <div className="title">
          <h2 className="signature-generator">Signature Generator</h2>
        </div>

        <h6 className="fill-in-your-informa">
          Fill in your information to generate your email signature
        </h6>

        <form className="asd col s12 pull-s1">
          <div className="row">
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
          <div className="row">
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
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="email@belatrixsf.com"
                id="first_name"
                type="text"
                className="validate"
              />
              <label className="active" for="first_name">
                Email *
              </label>
            </div>
          </div>
          <div className="row">
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
        </form>


      </div>
    );
  }
}
