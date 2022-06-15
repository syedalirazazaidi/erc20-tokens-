// import { CrowdSale } from "../typechain/CrowdSale";
// import { MyToken } from "../typechain/MyToken";
import { ethers } from "hardhat";

// async function main() {
//   const [deployer] = await ethers.getSigners();

//   console.log("Deploying contracts with the account:", deployer.address);

//   console.log(
//     "Account balance Ether:",
//     (await deployer.getBalance()).toString()
//   );

//   const Token = await ethers.getContractFactory("MyToken");
//   const token: MyToken = await Token.deploy();

//   console.log("Token address:", token.address);
//   const CrowdSale = await ethers.getContractFactory("CrowdSale");
//   const crowdSale: CrowdSale = await CrowdSale.deploy(token.address);

//   console.log("Crowdsale Contract address:", crowdSale.address);

//   const grantRoleTx = await token.grantRole(
//     await token.MINTER_ROLE(),
//     crowdSale.address
//   );

//   // wait until the transaction is mined
//   await grantRoleTx.wait();
//   const buyTx = await crowdSale.buyToken({
//     value: ethers.utils.parseEther("0.05"),
//   });

//   // wait until the transaction is mined
//   await buyTx.wait();

//   const bal = await token.balanceOf(deployer.address);

//   console.log("My MyToken Balance is:", bal);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  // Start deployment, returning a promise that resolves to a contract object
  const hello_world = await HelloWorld.deploy("Hello World!");
  console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
