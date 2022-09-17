const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
  'spend this deny gate spoil oak steak else fashion else volcano evoke',
  'https://rinkeby.infura.io/v3/22d1378cb19e49d78ce530af76133143'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(compiledFactory.interface);
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();