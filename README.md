# Sign Basic ETH Transaction (with Platform support)

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|DEFAULT_RPC | RPC to use for the transaction default is setup for Ganache | "HTTP://127.0.0.1:7545" |
|TX_FROM | Transaction from ETH address ||
|TX_PRIVATE_KEY | Transaction from ETH address private key ||
|TX_TO | Transaction to ETH address ||
|TX_CHAIN_ID | Transaction chain id | "1" |
|TX_VALUE | Transaction value in WEI | "0" |
|TX_GAS | Transaction gas value | "2000000" |
|TX_NONCE | Transaction nonce value | "0" |
|PLATFORM_NONCE | Transaction platform nonce value ||

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 18.7.0


# Getting started

- Clone the repository
```
git clone git@github.com:cormacdoesprogramming/sign-basic-eth-transaction.git
```

- Install dependencies
```
cd sign-basic-eth-transaction
npm install
```

- Copy .env.example to .env
```
cp .env.example .env
```

- Fill in the ENV variables
```
TX_FROM=
TX_PRIVATE_KEY=
TX_TO=
```

- Set the PLATFORM_NONCE ENV variable (optional)
```
PLATFORM_NONCE=
```

- Build and run the script
```
node src/script.js
```

If successful a signed transaction will be output to the console. If not double check your ENV variable values.


## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **node_modules**         | Contains all  npm dependencies                                                            |
| **src**                  | Contains  source code that will be compiled to the dist dir                               |
| **src**/script.js         | Entry point to the script                                                               |
| package.json             | Contains npm dependencies as well as [build scripts](#what-if-a-library-isnt-on-definitelytyped)   |
