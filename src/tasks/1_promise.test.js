import { randomNumberHandler, delay } from "./1_promise";

describe("TestPromise test ", () => {

    it("randomNumberHandler ", () => {
        console.log("success! ", randomNumberHandler(), delay("1", "2"));
    });
});