import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'flag-icon-css/css/flag-icon.css';
import 'flag-icon-css/css/flag-icon.min.css';
export default class PhoneBox extends React.Component {
  render() {
    if (this.props.displayCheck) {
      return (
        <div className="select-validate phone-box">
          {this.presentNumbers(this.props.userData)}
        </div>
      );
    } else {
      return (
        <div className="select-validate phone-box">{this.presentdefault()}</div>
      );
    }
  }

  getSpanClassNameForItem(item) {
    switch (item) {
      case 'Argentina':
        return 'flag-icon flag-icon-ar';
        break;
      case 'Perú':
        return 'flag-icon flag-icon-pe';
        break;
      case 'Colombia':
        return 'flag-icon flag-icon-co';
        break;
      case 'USA':
        return 'flag-icon flag-icon-us';
        break;
      case 'España':
        return 'flag-icon flag-icon-es';
        break;

      default:
        return 'Error!' ;
    }
  }

  presentNumbers(phoneNumbers) {
    return (
      <React.Fragment>
        <div className="row">
          {phoneNumbers.map((item, i) => (
            <React.Fragment key={i}>
              <div className="col s4 offset-s1">
                <div class="chip">
                  <span
                    className={this.getSpanClassNameForItem(
                      item.location.value
                    )}
                  />{' '}
                  <span>{item.phone}</span>
                  <i class="close material-icons">close</i>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }

  presentdefault() {
    return (
      <React.Fragment>
        <div className="phoneDefaultContainer">
          <img id="phoneImg" src={require('./phone.png')} alt="" />{' '}{' '}
          <span>The added phone numbers will appear here</span>
        </div>
      </React.Fragment>
    );
  }
}
