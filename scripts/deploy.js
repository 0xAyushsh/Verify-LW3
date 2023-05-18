const { ethers } = require("hardhat");

// require("dotenv").config({path: "../.env"})

async function main(){
 //Get the contract

 const verify = await ethers.getContractFactory("Verify");

 const deployedVerifyContract = await verify.deploy();
 await deployedVerifyContract.deployed();

 console.log("Verify contract address : ", deployedVerifyContract.address);
 
 //Sleeping ............
 await sleep(40000);
 await hre.run("verify:verify",{
  address : deployedVerifyContract.address,
  constructorArguments : []
 });
}

async function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

main().then(()=> process.exit(0))
      .catch(e=> {
        console.log(e);
        process.exit(1);
      })