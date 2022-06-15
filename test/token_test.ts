import { MyToken } from "./../typechain/MyToken.d";
import { MyToken__factory } from "./../typechain/factories/MyToken__factory";
import { expect } from "chai";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("FirstCoin", function () {
  it("Should return the new greeting once it's changed", async function () {
    const [owner, addr1]: SignerWithAddress[] = await ethers.getSigners();

    const FirstCoin: MyToken__factory = await ethers.getContractFactory(
      "MyToken"
    );
    const firstCoin: MyToken = await FirstCoin.deploy();
    await firstCoin.deployed();

    await firstCoin.mint(owner.address, 1000);

    expect(await firstCoin.totalSupply()).to.equal(1000);

    expect(await firstCoin.balanceOf(await owner.getAddress())).to.equal(1000);

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });

  it("Should transfer coins correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();

    const FirstCoin = await ethers.getContractFactory("MyToken");
    const firstCoin = await FirstCoin.deploy();
    await firstCoin.deployed();

    await firstCoin.mint(owner.address, 1000);

    await firstCoin.transfer(await addr1.getAddress(), 10);

    expect(await firstCoin.balanceOf(await owner.getAddress())).to.equal(990);

    expect(await firstCoin.balanceOf(await addr1.getAddress())).to.equal(10);
  });
});
