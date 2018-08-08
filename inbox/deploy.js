//部署智能合约到真实的rankeby网络
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "crouch fiction income edge cluster turtle plastic ozone mom predict goddess express";
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/b5193966085f4ae0a469a7a77215b0ba");
const web3 = new Web3(provider);

deploy =async ()=>{
    const accounts = await web3.eth.getAccounts();
    //0x81F152eB36d1CE8De59e729f389c28e9b59A44fc
    console.log(accounts[0]);
    const result =await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data:bytecode,
            arguments:['abc']
        }).send({
            from:accounts[0],
            gas:'3000000'
        });
    console.log('address:'+result.options.address);
};
deploy();