describe("test for truthy", () => {
    test("truthy operators", () => {
        const name = "aryan";
        const n = null;
        expect(name).toBeTruthy();
        expect(n).toBeFalsy();

        var num1 = 100;
        expect(num1).toBeGreaterThan(10);
    });
});