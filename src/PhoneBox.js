import React from "react";
export default class PhoneBox extends React.Component {
  render() {
    return (
      <div className='select-validate phone-box'>
        {this.presentNumbers(
          this.props.userData.location,
          this.props.userData.phoneNumber
        )}
      </div>
    );
  }

  presentNumbers(location, phoneNumber) {
    return location.map((loc, i) => (
      <React.Fragment key={i}>
        {`${loc} Phone: ${phoneNumber[i]}`}
        <br />
      </React.Fragment>
    ));
  }
}
