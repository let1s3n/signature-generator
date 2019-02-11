import React from 'react';
export default class PhoneBox extends React.Component {
  render() {
    return (
      <div className="select-validate phone-box">
        {this.presentNumbers(this.props.userData)}
      </div>
    );
  }

  presentNumbers(phoneNumbers) {
    return (
      <React.Fragment>
        <center>
          <span>
            <u>Phones to be add</u>:
          </span>
        </center>
        <br />
        {phoneNumbers.map((item, i) => (
          <React.Fragment key={i}>
            {item.location.value} Phone:
            <a href={`tel:${item.phone}`}>{item.phone}</a>
            <br />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
