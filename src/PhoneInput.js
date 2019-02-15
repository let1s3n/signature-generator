import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { apiGetAll } from './dataService';
import { apiGetLocations } from './dataService';
import { colourStyles, selectLocationsStyles, DropdownIndicator } from './SelectComponentStyles';

class PhoneInput extends Component {
  render() {
    return (
      <div className="row input last">
        <div className="input-field col s12">
          <div className="input-field col s4">
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
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
            <a
              id="btn-phones"
              className="btn-floating btn-large waves-effect waves-light red btn-small"
              onClick={this.addNewPhone}
            >
              <i className="material-icons">add</i>
            </a>
          </div>
          <label className="active">Phone number</label>
        </div>
      </div>
    );
  }
}

PhoneInput.propTypes = {};

export default PhoneInput;
