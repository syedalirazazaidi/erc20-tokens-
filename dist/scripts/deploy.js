"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, Hardhat!");
    // await greeter.deployed();
    // console.log("Greeter deployed to:", greeter.address);
    const [deployer] = await hardhat_1.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance Ether:", (await deployer.getBalance()).toString());
    const Token = await hardhat_1.ethers.getContractFactory("MyToken");
    const token = await Token.deploy();
    console.log("Token address:", token.address);
    const CrowdSale = await hardhat_1.ethers.getContractFactory("CrowdSale");
    const crowdSale = await CrowdSale.deploy(token.address);
    console.log("Crowdsale Contract address:", crowdSale.address);
    const grantRoleTx = await token.grantRole(await token.MINTER_ROLE(), crowdSale.address);
    // wait until the transaction is mined
    await grantRoleTx.wait();
    const buyTx = await crowdSale.buyToken({
        value: hardhat_1.ethers.utils.parseEther("0.05"),
    });
    // wait until the transaction is mined
    await buyTx.wait();
    const bal = await token.balanceOf(deployer.address);
    console.log("My MyToken Balance is:", bal);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
