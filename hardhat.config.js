require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/9GzTmTDyBzdqoima9KSR-XSO3vCdYpbl',
      accounts: [ '879020c4e38ebc7eb8ee4da6acd9a30650313e919ed67debcdf7736b8e556735']
    }
  }
};
