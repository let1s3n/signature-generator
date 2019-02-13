import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Select from 'react-select';
import M from 'materialize-css';
import PhoneBox from './PhoneBox';
import { apiGetAll } from './dataService';
import { apiGetLocations } from './dataService';
import ModalComponent from './ModalComponent';
import { colourStyles, selectLocationsStyles } from './SelectComponentStyles';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      position: null,
      email: '',
      title: '<b>Belatrix Software</b>',
      skypeId: '',
      emailService: '',
      defaultPhoneNumber: {
        location: '',
        phone: ''
      },
      phoneNumbers: [],
      availablePositions: [],
      availableLocations: [],
      showComponent: false
    };
  }

  componentDidMount() {
    apiGetAll().then(data => {
      this.setState({
        availablePositions: data
      });
    });

    apiGetLocations().then(data => {
      this.setState({
        availableLocations: data
      });
    });
  }

  handleSubmit = event => {
    // Se llama después de que el navegador ya valida los required, etc...
    event.preventDefault();
    const buttonMaterializeInstance = M.Modal.getInstance(this.modal.current);
    const validoAdicional = true;
    if (validoAdicional) {
      buttonMaterializeInstance.open();
    }
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
  };

  handleLocationChange = location => {
    let defaultNumber = this.state.defaultPhoneNumber;
    defaultNumber.location = location;
    this.setState({
      defaultPhoneNumber: defaultNumber
    });
  };

  handlePhoneChange = event => {
    let defaultNumber = this.state.defaultPhoneNumber;
    defaultNumber.phone = event.target.value;
    this.setState({
      defaultPhoneNumber: defaultNumber
    });
  };

  addNewPhone = event => {
    this.setState({
      showComponent: true,
      phoneNumbers: [...this.state.phoneNumbers, this.state.defaultPhoneNumber],
      defaultPhoneNumber: { location: '', phone: '' }
    });
  };

  modal = React.createRef();

  render() {
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

        <form
          id="myForm"
          ref="form"
          onSubmit={this.handleSubmit}
          className="col s12"
        >
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
                className="react-select-container"
                classNamePrefix="react-select"
                styles={colourStyles}
                name="position"
                value={this.state.position}
                onChange={this.handleChange}
                options={this.state.availablePositions}
                placeholder={'Type or select your position'}
              />

              <label className="active" htmlFor="position" id="word">
                Position *
              </label>
            </div>
          </div>
          <div className="row input">
            <div className="input-field col s12">
              <input
                required
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
                required
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

          <div className="row input last">
            <div className="input-field col s12">
              <div className="input-field col s5">
                <Select
                  className="react-select-container"
                  classNamePrefix="react-select"
                  styles={selectLocationsStyles}
                  name="location"
                  value={this.state.defaultPhoneNumber.location}
                  onChange={this.handleLocationChange}
                  options={this.state.availableLocations}
                />
                <label className="active" htmlFor="location">
                  Location
                </label>
              </div>
              <div className="input-field col s5">
                <input
                  name="phoneNumber"
                  value={this.state.defaultPhoneNumber.phone}
                  type="text"
                  className="validate"
                  placeholder="ex. +51 (1) 999-9999"
                  onChange={this.handlePhoneChange}
                />
                <label className="active" htmlFor="phoneNumber">
                  Phone number
                </label>
              </div>
              <div className="input-field col s2">
                <a
                  id="btn-phones"
                  className="btn-floating btn-large waves-effect waves-light red btn-small"
                  onClick={this.addNewPhone}
                >
                  <i className="material-icons">add</i>
                </a>
              </div>
              <label className="active">Add phone number:</label>
            </div>
          </div>

          <div className="row input">
            <div className="input-field col s12">
              {this.state.showComponent && (
                <PhoneBox userData={this.state.phoneNumbers} />
              )}
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
                        <img src={require('./gmail.png')} alt="" />
                        <span className="button-text">Gmail</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require('./outlook.png')} alt="" />
                        <span className="button-text">Outlook</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require('./roundcube.png')} alt="" />
                        <span className="button-text">Roundcube</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="button-final btn-flat modal-trigger"
            type="submit"
            name="action"
          >
            GENERATE SIGNATURE
          </button>
        </form>

        <ModalComponent ref={this.modal} data={this.state} />

        <div className="fixed">
          <div className="copied-to-clipboard">COPIED TO CLIPBOARD</div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {};
