import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Select from 'react-select';
import Materialize from 'materialize-css';
import PhoneBox from './PhoneBox';
import { apiGetAll } from './utilities/dataService';
import { apiGetLocations } from './utilities/dataService';
import ModalComponent from './ModalComponent';
import {
  colourStyles,
  selectLocationsStyles,
  DropdownIndicator
} from './utilities/SelectComponentStyles';
import CreatableSelect from 'react-select/lib/Creatable';
import $ from 'jquery';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      position: null,
      email: '',
      title: 'Belatrix Software',
      skypeId: '',
      emailService: '',
      defaultPhoneNumber: {
        location: '',
        phone: ''
      },
      phoneNumbers: [],
      availablePositions: [],
      availableLocations: [],
      showComponent: false,
      showAddButton: false
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
    event.preventDefault();
    const buttonMaterializeInstance = Materialize.Modal.getInstance(
      this.modal.current
    );
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
    if (
      (this.state.defaultPhoneNumber.location != '') &
      (this.state.defaultPhoneNumber.phone != '')
    ) {
      this.cont++;
      this.setState({
        showComponent: true,
        phoneNumbers: [
          ...this.state.phoneNumbers,
          this.state.defaultPhoneNumber
        ],
        defaultPhoneNumber: { location: '', phone: '' }
      });
    }
  };

  deletePhone = numero => {
    if (this.state.phoneNumbers.length == 0) {
      this.setState({
        showComponent: false
      });
    }
    this.setState(({ phoneNumbers }) => {
      const newNumbers = phoneNumbers.filter(it => it.phone !== numero);
      return {
        phoneNumbers: newNumbers
      };
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
              <CreatableSelect
                components={{ DropdownIndicator }}
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
              <div className="input-field col s4">
                <Select
                  components={{ DropdownIndicator }}
                  styles={selectLocationsStyles}
                  name="location"
                  value={this.state.defaultPhoneNumber.location}
                  onChange={this.handleLocationChange}
                  options={this.state.availableLocations}
                />
                <label className="active" htmlFor="location">
                  Location *
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  name="phoneNumber"
                  value={this.state.defaultPhoneNumber.phone}
                  type="text"
                  className="validate"
                  placeholder="ex. +51 (1) 999-9999"
                  onChange={this.handlePhoneChange}
                />
                <label className="active" htmlFor="phoneNumber">
                  Phone number *
                </label>
              </div>
              <div className="input-field col s2">
                {this.maximumAditionalPhonesValidation()}
              </div>
              <label className="active">Phone number</label>
            </div>
          </div>

          <div className="row input">
            <div className="input-field col s12">
              <PhoneBox
                userData={this.state.phoneNumbers}
                deletePhone={this.deletePhone}
                displayCheck={this.state.showComponent}
              />
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
                        <img src={require('./images/gmail.png')} alt="" />
                        <span className="button-text">Gmail</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require('./images/outlook.png')} alt="" />
                        <span className="button-text">Outlook</span>
                      </span>
                    </div>
                    <div className="rectangle">
                      <span className="btn-flat no-cursor">
                        <img src={require('./images/roundcube.png')} alt="" />
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

  getClassButtonForPhoneNumers = () => {
    let className = 'btn btn-floating btn-small tooltipped';
    if (this.state.phoneNumbers.length < 3) {
      className += ' custom-button-color';
    } else {
      className += ' custom-disabled-button-color';
    }
    return className;
  };

  getToolTipMesssage = () => {
    if (this.state.phoneNumbers.length < 3) {
      return 'Add phone number';
    }
    return 'Maximum of phone numbers reached';
  };

  maximumAditionalPhonesValidation = () => {
    return (
      <React.Fragment>
        <a
          id="btn-phones"
          className={this.getClassButtonForPhoneNumers()}
          onClick={this.addNewPhone}
          data-position="bottom"
          data-tooltip={this.getToolTipMesssage()}
        >
          <i className="material-icons">add</i>
        </a>
      </React.Fragment>
    );
  };
}

Form.propTypes = {};
