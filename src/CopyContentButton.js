import React from 'react';
import $ from 'jquery';
import { copyFormatted } from './copy-to-clipboard';
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
        Copy Info
      </button>
    );
  }

  presentNumbers(phoneNumbers) {
    let str = '';
    for (let i = 0; i < phoneNumbers.length; i++) {
      str += `${phoneNumbers[i].location} Phone: <a href="tel:${
        phoneNumbers[i].phone
      }">${phoneNumbers[i].phone}</a></br>`;
    }
    return str;
  }

  getSignatureHeader(fullName, position, str, email, skypeId, phoneNumbers) {
    return `<p style="@import url('https://fonts.googleapis.com/css?family=Lato');font-family: 'Lato', sans-serif;line-height:15px;font-size:9pt;">
      ${fullName}</br>
      ${position}</br>
      ${str.bold()}</br>
      <a href="mailto:${email}">${email} </a></br>
      USA Phone: <a href="tel:+16176081413">+1 (617) 608-1413</a> </br> 
      PE Phone: <a href="tel:+005117173350">+51 (1) 717-3350</a> </br>
      ${this.presentNumbers(phoneNumbers)}
      Skype ID: ${skypeId} </br>
      <a href="http://www.belatrixsf.com">http://www.belatrixsf.com</a>
      </br>
      </br>
      </p>`;
  }

  getConfidentialityWarning() {
    return `<p style="@import url('https://fonts.googleapis.com/css?family=Lato');font-family: 'Lato', sans-serif;text-align:justify;line-height:15px;font-size:7pt;color: rgb(127,127,127)">
      <u>WARNING OF CONFIDENTIALITY</u>: The information contained and transmitted here is CONFIDENTIAL and it 
      is for exclusive use of the addressee indicated above, and for his/her specific use. If you are not 
      the addressee, we apologize for any inconvenience. It is hereby notified that it is prohibited to 
      revise, retransmit or broadcast or any other type of use of the information contained herein by 
      people who are not the original addressee. If you have received this information by mistake, 
      please contact the sender and eliminate the information contained here from all computers.
      </br>
      </br>
      <u>AVISO DE CONFIDENCIALIDAD</u>: La información aquí contenida y transmitida es CONFIDENCIAL, para uso 
      exclusivo del destinatario arriba indicado y para su utilización específica. Si usted no es el 
      destinatario, sepa disculpar la molestia. Se le notifica por el presente que está prohibida su 
      revisión, retransmisión, difusión, y/o cualquier otro tipo de uso de la información contenida 
      por personas extrañas al destinatario original. Si Ud. Ha recibido por error esta información, 
      por favor contacte al remitente y elimine la información aquí contenida de toda computadora 
      donde resida.
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
