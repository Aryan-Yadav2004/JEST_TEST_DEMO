//setup and cleaning methods

const mathOpertations = require("../calculator");

// 2 -> before each and after each
//2 -> before All and after All

describe("Calculator Tests", () => {
    var input1 = 0;
    var input2 = 0;
     
    beforeAll(() => {
        console.log("beforeAll Called");
    });

    afterAll(() => {
        console.log("afterAll Called");
    });

    beforeEach(() => {
        console.log("beforeEach called");
        input1 = 1;
        input2 = 2;
    });

    afterEach(() => {
        console.log("AfterEach is Called");
    });

    test('add',() => {
        var res = mathOpertations.sum(input1, input2);
        expect(res).toBe(3)
    });

    test('mul',() => {
        var res = mathOpertations.multiply(input1, input2);
        expect(res).toBe(2);
    });
});