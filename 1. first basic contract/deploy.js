const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('./compile');

provider = new HDWalletProvider(
    // your mnmonic
    '12 words',
    // your infura url
    'https://rinkeby.infura.io/v3/_____________________'
)

const web3 = new Web3(provider)


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting ro deploy from account', accounts[0]);
    
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deploy to', result.options.address);
    provider.engine.stop();
};

deploy();