import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'flag-icon-css/css/flag-icon.css';
import 'flag-icon-css/css/flag-icon.min.css';
export default class PhoneBox extends React.Component {
  render() {

  

    return (
      <div className="select-validate phone-box">
        {this.presentNumbers(this.props.userData)}
      </div>
    );
  }

  

  presentNumbers(phoneNumbers) {
    var aux = '';
    

    return (
      <React.Fragment>
        <ul className="collection">
          <li className="collection-item avatar">
            {phoneNumbers.map((item, i) => (
              <React.Fragment key={i}>
                {
                  {
                    'Argentina': (aux = 'gr'),
                    'Perú': (aux = 'pe'),
                    default: 'asd'
                  }[item.location.value]
                }
                <span className={`flag-icon flag-icon-${aux}`}></span>
                {item.location.value} Phone:{' '}
                <a href={`tel:${item.phone}`}>{item.phone}</a>
                <br />
              </React.Fragment>
            ))}
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
