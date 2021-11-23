# First Basic Contract

1. The first basic contract you start with is contract with a message.
2. This contract allow the user to initialise a 'string' message and store it it the contract.
3. A `setMessage` function allow the user to change the message.
4. User can call the message to get back the string store in the contract 


# Warning DO NOT use your real metamusk mnemomic with REAL coins. 
* As you might be upload the code to your github, risk of giving away your account. 
* Create a new test metamusk account using alternative browser(chorme ,firefox)


## Environment Setup
In your terminal of choice, run the following:

for Windows you might consider using gitbash

1. `mkdir inbox-updated`
2. `cd inbox-updated`
3. `npm init`
4. `npm install solc web3 mocha ganache-cli @truffle/hdwallet-provider`
5. Update your test script in the package.json file to be "test": "mocha"


## Getting Test Ether
In the upcoming lecture "Getting Ether from the Rinkeby Faucet", we will post to Google+ to get more Ether from the Authenticated Faucet. Since Google+ has been shut down, we will need to use Twitter instead: 

To request funds via Twitter, make a tweet with your Ethereum address pasted into the contents (surrounding text doesn't matter). Copy-paste the tweets URL into the above input box and fire away!

Make sure these are public tweets! You can safely delete them after you've received your Ether.

### Alternative Rinkeby faucet
You can request for 0.1 test eth each time on this site.

You can do it 3 times as 0.3 test eth should sufficent

https://faucets.chain.link/rinkeby


## Infura
Infura's development suite provides instant, scalable API access to the Ethereum and IPFS networks

When we are deploying our smart contract on live test rinkeby test network, we need to have a live node so that we can interact with smart contract. It is very troblesome hosting your own node.

INFURA does it very well and it is free!

We are going to use node provided by infura. Setting up of account is very easy.

https://infura.io/



