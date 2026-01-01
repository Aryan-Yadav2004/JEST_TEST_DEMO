const  mathOpertations =  require("../calculator.js");

describe("testing math opterations", () => {
    test("testing sum function", () => {
        expect(mathOpertations.sum(1, 2)).toBe(3);
    });

    test("testing multiplying function", () => {
        expect(mathOpertations.multiply(1, 2)).toBe(2);
    });
})
