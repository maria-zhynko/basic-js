const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  encrypt(message,key) {
    if (message === undefined || key === undefined) {
    throw CustomError();
    }

  message = message.toUpperCase();
  key = key.toUpperCase();

  if(key.length < message.length) {
    let n = message.length - key.length;
    for(let i = 0;i<n;i++){
      key+=key[i];
    }
  }

  let scyptedword = "";
  let j = 0;
  for(let i  =0;i<message.length;i++) {
    if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
      scyptedword += message[i];
      continue;
    }
    let diff = (message.charCodeAt(i) - 65) + (key.charCodeAt(j) - 65);
    diff%=26;
    let letter = String.fromCharCode(diff+65);
    scyptedword+=letter;
    j++;
  }
  return this.modification ? scyptedword.toUpperCase() : scyptedword.toUpperCase().split('').reverse().join('');
}
  decrypt(message,key) {
    if (message === undefined || key === undefined) {
    throw CustomError();
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    if(key.length < message.length) {
      let n = message.length - key.length;
      for(let i = 0;i<n;i++){
        key+=key[i];
      }
    }

    let unscyptedword = "";
    let j = 0;
    for(let i  =0; i<message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        unscyptedword += message[i];
        continue;
      }
      let diff = (message.charCodeAt(i) - 65) - (key.charCodeAt(j) - 65);
      if(diff<65)
      diff+=26;
      diff%=26;
      let letter = String.fromCharCode(diff + 65);
      unscyptedword+=letter;
      j++;
    }
  return this.modification ? unscyptedword.toUpperCase() : unscyptedword.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
