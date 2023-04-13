//Hedera integration Script by Vinay Vidyasagar
// The Blueprint needs to be linked properly to this script. Otherwise it won't work

console.log("Javascript is working");// Testing if Javascript is working first

// import _ from 'lodash';
// import _ from 'express';

// console.log("Imported " + _ + " successfully");


// const { Client, PrivateKey, AccountCreateTransaction } = require("@hashgraph/sdk"); //Importing Hashgraph SDK

// (async function () {
//     // Configure your client with your Hedera account ID and private key
//     const myAccountId = "your-account-id";
//     const myPrivateKey = "your-private-key";
    
//     const client = Client.forTestnet()
//         .setOperator(myAccountId, myPrivateKey);
    
//     // Create a new private key for the new account
//     const newAccountPrivateKey = PrivateKey.generate();
//     const newAccountPublicKey = newAccountPrivateKey.publicKey;

//     // Create a new account on Hedera
//     const transactionResponse = await new AccountCreateTransaction()
//         .setKey(newAccountPublicKey)
//         .setInitialBalance(0)
//         .execute(client);

//     const transactionReceipt = await transactionResponse.getReceipt(client);
//     const newAccountId = transactionReceipt.accountId;

//     console.log(`New account created: ${newAccountId}`);
//     console.log(`New account private key: ${newAccountPrivateKey}`);
// })();



