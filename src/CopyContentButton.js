import React from "react";
import $ from "jquery";
import { copyFormatted } from "./copy-to-clipboard";
export default class CopyContentButton extends React.Component {
  handleCopy = event => {
    const text = this.getFormattedSignature(
      this.props.userData.fullName,
      this.props.userData.position.label,
      this.props.userData.title,
      this.props.userData.email,
      this.props.userData.skypeId
    );
    copyFormatted(text);
    $(".fixed")
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

  getSignatureHeader(fullName, position, str, email, skypeId) {
    return `${fullName}<br/>
      ${position}</br>
      ${str.bold()}</br>
      <a href="mailto:${email}">${email} </a></br>
      USA Phone: <a href="tel:+16176081413">+1 (617) 608-1413</a> </br> 
      PE Phone: <a href="tel:+005117173350">(0051-1) 7173350</a> </br>
      Skype ID: ${skypeId} </br>
      <a href="http://www.belatrixsf.com">http://www.belatrixsf.com</a> </br>
      
      </br>`;
  }

  getConfidentialityWarning() {
    return `<p style="text-align: justify;">
      WARNING OF CONFIDENTIALITY: The information contained and transmitted here is CONFIDENTIAL and it 
      is for exclusive use of the addressee indicated above, and for his/her specific use. If you are not 
      the addressee, we apologize for any inconvenience. It is hereby notified that it is prohibited to 
      revise, retransmit or broadcast or any other type of use of the information contained herein by 
      people who are not the original addressee. If you have received this information by mistake, 
      please contact the sender and eliminate the information contained here from all computers.</p>
      </br>
      <p style="text-align: justify;">
      AVISO DE CONFIDENCIALIDAD: La información aquí contenida y transmitida es CONFIDENCIAL, para uso 
      exclusivo del destinatario arriba indicado y para su utilización específica. Si usted no es el 
      destinatario, sepa disculpar la molestia. Se le notifica por el presente que está prohibida su 
      revisión, retransmisión, difusión, y/o cualquier otro tipo de uso de la información contenida 
      por personas extrañas al destinatario original. Si Ud. Ha recibido por error esta información, 
      por favor contacte al remitente y elimine la información aquí contenida de toda computadora 
      donde resida.
      </p>`;
  }

  getFormattedSignature(fullName, position, str, email, skypeId) {
    return this.getSignatureHeader(fullName, position, str, email, skypeId) + 
      this.getConfidentialityWarning();
  }
}
