require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env"})

/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL= process.env.POLYGON_RPC_URL;
const PRIVATE_KEY=process.env.PRIVATE_KEY;
const POLYGONSCAN_API_KEY=process.env.POLYGONSCAN_API_KEY
module.exports = {
  solidity: "0.8.4",
  defaultNetwork : "hardhat",
  networks : {
    mumbai : {
      url : RPC_URL,
      accounts : [PRIVATE_KEY]
    },
  },
  etherscan : {
    apiKey : {
      polygonMumbai : POLYGONSCAN_API_KEY
    }
  }

};
