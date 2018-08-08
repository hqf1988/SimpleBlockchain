const express = require('express');
const app = express();
const Web3 = require('web3');
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "crouch fiction income edge cluster turtle plastic ozone mom predict goddess express";
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3 = new Web3(provider);

app.get('/send/:address',async function (req, res) {
    console.log('开始转账');
    const address = req.params.address;
    console.log(address);
    try {
        const accounts = await web3.eth.getAccounts();
        const trans = await web3.eth.sendTransaction({
            from: accounts[0],
            to: address,
            value: '1000000000000000'
        });
        res.send('转账成功:' + trans.id);
    }catch (error){
        res.send(error);
    }
});

const server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});