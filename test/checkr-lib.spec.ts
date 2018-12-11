import * as CHECKR_LIB from '../src/checkr-lib';

import { Coins, Socials, Personals } from '../src/model';

function checkEmpty(type: any, undefinedError?: string, emptyError?: string): void {
  try {
    expect(CHECKR_LIB.isValid(type, undefined)).toBeFalsy();
  } catch (err) {
    if (err && undefinedError) {
      expect(err.toString().indexOf(undefinedError)).toBeGreaterThan(-1);
    } else {
      expect(true).toBeFalsy();
    }
  }

  try {
    expect(CHECKR_LIB.isValid(type, '')).toBeFalsy();
  } catch (err) {
    if (err && emptyError) {
      expect(err.toString().indexOf(emptyError)).toBeGreaterThan(-1);
    } else {
      expect(true).toBeFalsy();
    }
  }
}

describe('Test Coins IDENTIFIERS', () => {
  const GOOD = {
    BTC: '18cBEMRxXHqzWWCxZNtU91F5sbUNKhL5PX',
    ETH: '0xd91244bd83c88741b7ff8563e4482078491a1e61',
    ZEC: 't1WoLCyt7x9GaUZNPcjrFtjFPzQ7duToUFs',
    // ARK: 'DEbU6xMfHJbTJ3jaYc78TM7pLe8tXGiwC3' Fails with devnet address, Have a look
    ARK: 'a6fpb1BJZq4otWiVsBcuLG1ZGs5WsqqQtH',
  };

  it('BTC', () => {
    expect(CHECKR_LIB.isValid(Coins.BTC, GOOD.BTC)).toBeTruthy();
    checkEmpty(Coins.BTC);
  });

  it('ETH', () => {
    expect(CHECKR_LIB.isValid(Coins.ETH, GOOD.ETH)).toBeTruthy();
    checkEmpty(Coins.ETH);
  });

  it('ZEC', () => {
    expect(CHECKR_LIB.isValid(Coins.ZEC, GOOD.ZEC)).toBeTruthy();
    checkEmpty(Coins.ZEC);
  });

  it('ARK', () => {
    expect(CHECKR_LIB.isValid(Coins.ARK, GOOD.ARK)).toBeTruthy();
    checkEmpty(Coins.ARK);
  });
});

describe('Test Social IDENTIFIERS', () => {
  it('Twitter', () => {
    expect(CHECKR_LIB.isValid(Socials.TWITTER, '@Uniknam_UNS')).toBeTruthy();
    expect(CHECKR_LIB.isValid(Socials.TWITTER, '@unik-name')).toBeFalsy();
    checkEmpty(Socials.TWITTER);
  });

  it('LinkedIn', () => {
    expect(CHECKR_LIB.isValid(Socials.LINKEDIN, 'unik-name')).toBeTruthy();
    expect(CHECKR_LIB.isValid(Socials.LINKEDIN, 'aaaa')).toBeFalsy();
    expect(CHECKR_LIB.isValid(Socials.LINKEDIN, '1234')).toBeFalsy();
    expect(CHECKR_LIB.isValid(Socials.LINKEDIN, 'a12b')).toBeFalsy();
    expect(
      CHECKR_LIB.isValid(Socials.LINKEDIN, 'aaaa12a5f45fr785fd46f54sdf564ds6f54ds5f64ds65f4ds7fdsf4ds6f54dsf'),
    ).toBeFalsy();
    expect(CHECKR_LIB.isValid(Socials.LINKEDIN, 'sdsqd_sqd-sqdsqd*4465')).toBeFalsy();
    checkEmpty(Socials.LINKEDIN);
  });
});

describe('Test Personals IDENTIFIERS', () => {
  it('IBAN', () => {
    expect(CHECKR_LIB.isValid(Personals.IBAN, 'FR14 2004 1010 0505 0001 3M02 606')).toBeTruthy();
    expect(CHECKR_LIB.isValid(Personals.IBAN, '14 2004 1010 0505 0001 3M02 606')).toBeFalsy();
    expect(CHECKR_LIB.isValid(Personals.IBAN, 'AL35202111090000000001234567')).toBeTruthy();
    expect(CHECKR_LIB.isValid(Personals.IBAN, 'BE71096123456769')).toBeTruthy();
    expect(CHECKR_LIB.isValid(Personals.IBAN, 'DE75512108001245126199')).toBeTruthy();
    checkEmpty(Personals.IBAN);
  });

  it('PHONE', () => {
    expect(CHECKR_LIB.isValid(Personals.PHONE, '+33606060606')).toBeTruthy();
    try {
      expect(CHECKR_LIB.isValid(Personals.PHONE, '0606060606')).toBeTruthy();
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.toString().indexOf('INVALID_COUNTRY')).toBeGreaterThan(-1);
    }
    checkEmpty(Personals.PHONE, 'A phone number for parsing must be a string.', 'NOT_A_NUMBER');
  });
});
