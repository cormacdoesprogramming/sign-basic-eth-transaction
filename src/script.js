require('dotenv').config();
const Web3 = require('web3')

const rpc = process.env.DEFAULT_RPC ?? 'HTTP://127.0.0.1:7545';

console.log('Connecting to ' + rpc + '...');

const web3 = new Web3(new Web3.providers.HttpProvider(rpc));
const fromAddress = process.env.TX_FROM;
const privateKey = process.env.TX_PRIVATE_KEY;
const toAddress = process.env.TX_TO;

const createSignTransaction = async () => {
    console.log('Creating a transaction from ' + fromAddress + ' to ' + toAddress);

    const transactionConfig = {
        from: fromAddress,
        to: toAddress,
        chainId: process.env.TX_CHAIN ?? '1',
        value: process.env.TX_VALUE ?? '0',
        gas: process.env.TX_GAS ?? '2000000',
        data: Buffer.from(process.env.PLATFORM_NONCE, 'utf8').toString('hex'),
        nonce: process.env.TX_NONCE ?? '0'
    }

    const signedTransaction = await web3.eth.accounts.signTransaction(
        transactionConfig,
        privateKey
    );

    console.log('Transaction created & signed successfully...');

    console.log('Signed Transaction: ');
    console.log(signedTransaction.rawTransaction);

    console.log('done');
}

createSignTransaction()