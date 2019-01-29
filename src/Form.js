import React from "react";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import Select from "react-select";
import CopyContentButton from "./CopyContentButton";

const options = [
  { value: "UX Designer", label: "UX Designer" },
  { value: "UI Designer", label: "UI Designer" },
  { value: "Development Intern", label: "Development Intern" },
  { value: "Option 4", label: "Option 4" },
  { value: "Option 5", label: "Option 5" },
  { value: "Option 6", label: "Option 6" },
  { value: "Option 7", label: "Option 7" },
  { value: "Option 8", label: "Option 8" },
  { value: "Option 9", label: "Option 9" },
  { value: "Option 10", label: "Option 10" },
  { value: "Option 12", label: "Option 12" },
  { value: "Option 13", label: "Option 13" },
  { value: "Option 14", label: "Option 14" },
  { value: "Option 15", label: "Option 15" }
];

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* ==== To-Do : little hack to make placeholder prop work ==== */
      //value: '',
      fullName: "",
      position: { label: "", value: "" },
      email: "",
      title: "<b>Belatrix Software</b>",
      skypeId: "",
      emailService: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("Final data is", data);
  };

  handleInputChange = event => {
    event.preventDefault();

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleChange = position => {
    this.setState({
      position: position
    });
    /* ==== To-Do : little hack to make placeholder prop work ==== */

    /* let obj ={value: position.value, label: position.label};
    this.setState({value: obj}); */
  };

  render() {
    const { fullName, position } = this.state;

    const colourStyles = {
      control: (styles, { isFocused, isSelected, isDisabled }) => ({
        ...styles,
        color: '#000000',
        fontFamily: 'roboto',
        fontSize: '16px',
        lineHeight: '19px',
        height: "10px",
        borderRadius: 0,
        backgroundColor: "white",
        border: isFocused ? 0 : 0,
        boxShadow: isFocused ? 0 : 0,

        "&:hover": {
          border: isFocused ? 0 : 0,
          borderBottom: "2px solid #3c3c3c"
        },
        borderBottom: isFocused ? "2px solid #f89937" : "2px solid #3c3c3c"
      }),
      option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
          ...styles,
          color: '#000000',
          fontFamily: 'roboto',
          fontSize: '16px',
          lineHeight: '19px',

          backgroundColor: isDisabled
            ? null
            : isSelected
            ? "orange"
            : isFocused
            ? "orange"
            : null,

          cursor: isDisabled ? "not-allowed" : "default"
        };
      },
      input: styles => ({ ...styles }),
      placeholder: styles => ({ ...styles }),
      singleValue: styles => ({ ...styles })
    };

    return (
      <div className="row main">
        <div className="title">
          <h2 className="signature-generator">Signature Generator</h2>
        </div>
        <div className="divider" />
        <div id="subtitle" className="subtitle">
          <h6 className="fill-in-your-informa">
            Fill in your information to generate your email signature
          </h6>
        </div>

        <form onSubmit={this.handleSubmit} className="col s12" id="myForm">
          <div className="row input">
            <div className="input-field col s12">
              <input
                required
                placeholder="Enter your full name"
                id="full_name"
                name="fullName"
                type="text"
                className="validate"
                onChange={this.handleInputChange}
              />
              <label className="active" htmlFor="first_name">
                Full Name *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <Select
                styles={colourStyles}
                required
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                options={options}
                /* ==== To-Do : little hack to make placeholder prop work ==== */
                //value={this.state.value}
              />

              <label className="active" htmlFor="position" id="word">
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
                onChange={this.handleInputChange}
              />
              <label
                className="active"
                htmlFor="email"
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
                id="skypeId"
                name="skypeId"
                type="text"
                className="validate"
                onChange={this.handleInputChange}
              />
              <label className="active" htmlFor="skypeId">
                Skype ID *
              </label>
            </div>
          </div>

          <div className="row email-services-section">
            <div className="col s12">
              <div className="row">
                <div className="col s12">
                  <span className="email-service-span">
                    Available for these email providers:
                  </span>
                </div>
              </div>
              <div className="email-service-container">
                <div className="row-buttons">
                  <div className="col s12" onChange={this.handleInputChange}>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require("./gmail.png")} alt="" />
                        <span className="button-text">Gmail</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require("./outlook.png")} alt="" />
                        <span className="button-text">Outlook</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require("./roundcube.png")} alt="" />
                        <span className="button-text">Roundcube</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-final-container">
            <button
              className="button-final btn-flat modal-trigger"
              type="submit"
              name="action"
              // chequear conflicto del data-target con validaciones de las entradas
              data-target="modal1"
            >
              GENERATE SIGNATURE
            </button>
          </div>
        </form>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <img id="img-confirm" src={require("./confirmation.png")} alt="" />

            <h2 className="signature-generated">Signature Generated</h2>
            <h4 className="subtitle">
              Just copy the information below to add it to your email
            </h4>
          </div>
          <div className="modal-footer">
            <div className="footer-cage">
              <div className="footer-cage-text">
                {fullName} {position.label}...
              </div>
            </div>

            <div>
              <CopyContentButton userData={this.state} />
            </div>
          </div>
        </div>
        <div className="fixed">
          <div className="copied-to-clipboard">COPIED TO CLIPBOARD</div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {};
