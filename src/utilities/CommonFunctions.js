export const presentNumbers = (phoneNumbers) => {
  let str = '';
  for (let i = 0; i < phoneNumbers.length; i++) {
    str += `${phoneNumbers[i].location.value} Phone: <a href="tel:${
      phoneNumbers[i].phone
    }">${phoneNumbers[i].phone}</a></br>`;
  }
  return str;
};

export const disclaimer = () => {
  return `
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
    donde resida.`;
};

