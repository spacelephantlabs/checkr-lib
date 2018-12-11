import { Coins, Socials, Personals } from './model';
import { isTwitter, isLinkedIn, isIBAN, isCommonCoin, isARK, isPhone } from './utils';

function isValid(type: Coins | Socials | Personals, value: string): boolean {
  switch (type) {
    case Coins.BTC:
    case Coins.ETH:
    case Coins.ZEC:
      return isCommonCoin(value, type);
    case Coins.ARK:
      return isARK(value);
    case Socials.TWITTER:
      return isTwitter(value);
    case Socials.LINKEDIN:
      return isLinkedIn(value);
    case Personals.IBAN:
      return isIBAN(value);
    case Personals.PHONE:
      return isPhone(value);
    default:
      return true;
  }
}

export { isValid, Coins, Socials, Personals }

