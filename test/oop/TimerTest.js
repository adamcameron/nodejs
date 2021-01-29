let chai = require("chai");
let expect = chai.expect;

let Timer = require("../../src/oop/Timer");

describe("Test Timer", () => {
    it("handles a lap", async () => {
        const lapDuration = 100;
        let myTimer = new Timer();
        let myLap = await new Promise(resolve => {
            setTimeout(() => {
                resolve(myTimer.lap());
            }, lapDuration);
        });
        await expect(myLap).to.be.approximately(lapDuration, 5);
    })
});