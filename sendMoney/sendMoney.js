const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "crouch fiction income edge cluster turtle plastic ozone mom predict goddess express";
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3 = new Web3(provider);

send = async ()=>{
   const accounts = await web3.eth.getAccounts();
   let account0balance = await web3.eth.getBalance(accounts[0]);
    const str = 'xxx 我好喜欢你';
    let data = Buffer.from(str).toString('hex');
    data = '0x'+data;

    await web3.eth.sendTransaction({
        from:accounts[0],
        to:'0x859FD91B3de7d798C43964E052E63ec8D63A505D',
        value: '1000000000000000000',
        data:data
    });
    account0balance = await web3.eth.getBalance(accounts[0]);

    console.log('account0balance:'+account0balance+'wei');
};

send();