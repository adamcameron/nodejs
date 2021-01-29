let chai = require("chai");
let expect = chai.expect;

describe("Test TimerViaPrototype", () => {

    require("../../src/oop/TimerViaPrototype");

    it("handles a lap", async () => {
        const lapDuration = 100;
        let myTimer = new TimerViaPrototype();
        let myLap = await new Promise(resolve => {
            setTimeout(() => {
                resolve(myTimer.lap());
            }, lapDuration);
        });
        await expect(myLap).to.be.approximately(lapDuration, 5);
    })
});