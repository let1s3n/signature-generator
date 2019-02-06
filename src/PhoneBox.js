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
    /* let str = "";
    for (let i = 0; i < phoneNumbers.length; i++) {
      str += `${phoneNumbers[i].location} Phone: <a href="tel:${phoneNumbers[i].phone}">${
        phoneNumbers[i].phone
      }</a></br>`;
    }
    return str; */
    return (
      <React.Fragment>
        {phoneNumbers.map((item, i) => (
          <React.Fragment key={i}>
            {item.location} Phone:{' '}
            <a href={`tel:${item.phone}`}>{item.phone}</a>
            <br />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
}
