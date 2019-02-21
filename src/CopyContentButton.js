import React from 'react';
import $ from 'jquery';
import { copyFormatted } from './copy-to-clipboard';
import {presentNumbers} from './utilities/CommonFunctions';
import {disclaimer} from './utilities/CommonFunctions'

export default class CopyContentButton extends React.Component {
  handleCopy = event => {
    const text = this.getFormattedSignature(
      this.props.userData.fullName,
      this.props.userData.position.label,
      this.props.userData.title,
      this.props.userData.email,
      this.props.userData.skypeId,
      this.props.userData.phoneNumbers
    );
    copyFormatted(text);
    $('.fixed')
      .show(1)
      .delay(1000)
      .hide(1);
  };

  render() {
    return (
      <button className="footer-small-cage" onClick={this.handleCopy}>
        Copy Signature
      </button>
    );
  }

  getSignatureHeader(fullName, position, str, email, skypeId, phoneNumbers) {
    return `<p style="@import url('https://fonts.googleapis.com/css?family=Lato');font-family: 'Lato', sans-serif;line-height:15px;font-size:9pt;">
      ${fullName}</br>
      <i style="font-style: normal;color: #6D6D6D;">${position}</i></br>
      ${str.bold()}</br></br>
      <a href="mailto:${email}">${email} </a></br>
      ${presentNumbers(phoneNumbers)}
      Skype ID: ${skypeId} </br>
      <a href="http://www.belatrixsf.com">http://www.belatrixsf.com</a>
      </br>
      <a href="https://www.linkedin.com/company/belatrix-software-factory/"><img style={{height:'14px',width:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/LinkedIn.png')} /></a>
      <a href="https://www.facebook.com/BelatrixSoftware/"><img style={{width:'14px',height:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/Facebook.png')} /></a>
      <a href="https://twitter.com/BelatrixSF"><img style={{width:'14px',height:'14px',marginRight:'3px',marginTop:'3px'}} src={require('./images/twitter.png')}  /></a>
      </br>
      </br>
      </p>`;
  }

  getConfidentialityWarning() {
    return `<p style="@import url('https://fonts.googleapis.com/css?family=Lato');font-family: 'Lato', sans-serif;text-align:justify;line-height:15px;font-size:7pt;color: rgb(127,127,127)">
      ${disclaimer()}
      </p>`;
  }

  getFormattedSignature(fullName, position, str, email, skypeId, phoneNumbers) {
    return (
      this.getSignatureHeader(
        fullName,
        position,
        str,
        email,
        skypeId,
        phoneNumbers
      ) + this.getConfidentialityWarning()
    );
  }
}
