import { expect } from "chai";
import { ethers } from "hardhat";

import { Counter__factory } from "../typechain/factories/Counter__factory";
import { Counter } from "../typechain";

describe("Counter", function () {
    it("Should deploy the counter smart contract", async function () {
        const counterFactory: Counter__factory = await ethers.getContractFactory("Counter");
        const counter: Counter = await counterFactory.deploy();
        await counter.deployed();

        console.log("counter Address: ", counter.address);

        const count = await counter.count();
        console.log(count.toBigInt());

        const counterTx = await counter.addCount();

        await counterTx.wait();

        const counter2Tx = await counter.addCount();

        await counter2Tx.wait();

        const count2 = await counter.count();
        console.log(count2.toBigInt());



        // expect(await greeter.greet()).to.equal("Hello, world!");
        //
        // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
        //
        // // wait until the transaction is mined
        // await setGreetingTx.wait();
        //
        // expect(await greeter.greet()).to.equal("Hola, mundo!");
    });
});