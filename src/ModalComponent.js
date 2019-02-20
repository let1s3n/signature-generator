import React, { Component } from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import CopyContentButton from './CopyContentButton';
import Materialize from 'materialize-css';
import {
  signatureBodystyles,
  signatureDisclaimerStyles
} from './utilities/SignatureStyles';
import Parser from 'html-react-parser';
import {presentNumbers,disclaimer} from './utilities/CommonFunctions';

class ModalComponent extends Component {
  handleClose = () => {
    const buttonMaterializeInstance = Materialize.Modal.getInstance(
      this.props.forwardedRef.current
    );
    buttonMaterializeInstance.close();
    window.location.reload();
    window.scrollTo(0, 0);
  };

  render() {
    const {data: {position, fullName,title,email,phoneNumbers,skypeId}}  = this.props
    return (
      <div id="modal1" className="modal" ref={this.props.forwardedRef}>
        <div className="modal-content">
          <img
            id="img-confirm"
            src={require('./images/confirmation.png')}
            alt=""
          />
          <button onClick={this.handleClose} id="img-close">
            <img src={require('./images/close.png')} alt="" />
          </button>
          <h2 className="signature-generated">Signature Generated</h2>
          <h4 className="subtitle">
            Just copy the information below to add it to your email
          </h4>
        </div>
        <div className="modal-footer">
          <div className="footer-cage">
            <div className="footer-cage-text">
              <p style={signatureBodystyles}>
                {fullName}
                <br />
                <i id="position-preview">{position && position.label}</i>
                <br />
                <b>{title}</b>
                <br />
                <br />
                <a href="">{email} </a>
                <br />
                {Parser(presentNumbers(phoneNumbers))}
                Skype ID: {skypeId} <br />
                <a href="http://www.belatrixsf.com">
                  http://www.belatrixsf.com
                </a>
                <br />
                <a href="https://www.linkedin.com/company/belatrix-software-factory/"><img style={{height:'14px',width:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/LinkedIn.png')} /></a>
                <a href="https://www.facebook.com/BelatrixSoftware/"><img style={{width:'14px',height:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/Facebook.png')} /></a>
                <a href="https://twitter.com/BelatrixSF"><img style={{width:'14px',height:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/twitter.png')}  /></a>
                <br />
                <br />
              </p>

              <p style={signatureDisclaimerStyles}>
                {Parser(disclaimer())}
              </p> 
            </div>
          </div>

          <div>
            <CopyContentButton userData={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <ModalComponent {...props} forwardedRef={ref} />
));
