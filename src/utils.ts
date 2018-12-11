import * as ibantools from 'ibantools';
import * as ark from 'arkjs';
import * as WAValidator from 'wallet-address-validator';
import * as libphonenumber from 'libphonenumber-js';

(function init() {
  ark.crypto.setNetworkVersion(0x52);
})();

function match(value: string, regex: any): boolean {
  if (value) {
    return value.match(regex) !== null;
  }
  return false;
}

// --------- Coins
export function isCommonCoin(value: string, type: any): boolean {
  if (value && type) {
    return WAValidator.validate(value, type);
  }
  return false;
}

export function isARK(value: string): boolean {
  return ark.crypto.validateAddress(value);
}

// --------- Socials
export function isLinkedIn(value: string): boolean {
  return match(value, /^[a-zA-Z\-_]{5,30}$/);
}

export function isTwitter(value: string): boolean {
  return match(value, /^@([A-Za-z0-9_]+)$/);
}

// --------- Personals
export function isIBAN(value: string): boolean {
  return ibantools.isValidIBAN(ibantools.electronicFormatIBAN(value));
}

export function isPhone(value: string): boolean {
  return libphonenumber.parsePhoneNumber(value).isValid();
}
