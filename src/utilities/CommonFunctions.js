export const presentNumbers = (phoneNumbers) => {
  let str = '';
  for (let i = 0; i < phoneNumbers.length; i++) {
    str += `${phoneNumbers[i].location.value} Phone: <a href="tel:${
      phoneNumbers[i].phone
    }">${phoneNumbers[i].phone}</a></br>`;
  }
  return str;
};
