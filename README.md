# checkr-lib

## Description

Checkr-lib is a javascript library to check digital identifiers.

## How to install

Checkr-lib is available on our github public repo.

```bash
yarn add spacelephantlabs/checkr-lib#publish
```

```bash
npm install spacelephantlabs/checkr-lib#publish
```

N.B: If you don't specify `#publish` branch, you will get the dev package.

## How to use

```javascript

import * as CheckrLib from 'checkr-lib'

let isBTCValid = CheckrLib.isValid(CheckrLib.Coins.BTC, 'btcPublicAddress');

```

## How to build

1. `yarn`
2. `yarn build`
3. `yarn test` 


Remove built files : `yarn clean`

Remove built files AND `node_modules` : `yarn cleanAll`