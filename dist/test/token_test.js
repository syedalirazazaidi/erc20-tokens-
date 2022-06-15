"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hardhat_1 = require("hardhat");
describe("FirstCoin", function () {
    it("Should return the new greeting once it's changed", async function () {
        const [owner, addr1] = await hardhat_1.ethers.getSigners();
        const FirstCoin = await hardhat_1.ethers.getContractFactory("MyToken");
        const firstCoin = await FirstCoin.deploy();
        await firstCoin.deployed();
        await firstCoin.mint(owner.address, 1000);
        chai_1.expect(await firstCoin.totalSupply()).to.equal(1000);
        chai_1.expect(await firstCoin.balanceOf(await owner.getAddress())).to.equal(1000);
        // expect(await greeter.greet()).to.equal("Hello, world!");
        // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
        // wait until the transaction is mined
        // await setGreetingTx.wait();
        // expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
    it("Should transfer coins correctly", async function () {
        const [owner, addr1] = await hardhat_1.ethers.getSigners();
        const FirstCoin = await hardhat_1.ethers.getContractFactory("MyToken");
        const firstCoin = await FirstCoin.deploy();
        await firstCoin.deployed();
        await firstCoin.mint(owner.address, 1000);
        await firstCoin.transfer(await addr1.getAddress(), 10);
        chai_1.expect(await firstCoin.balanceOf(await owner.getAddress())).to.equal(990);
        chai_1.expect(await firstCoin.balanceOf(await addr1.getAddress())).to.equal(10);
    });
});
