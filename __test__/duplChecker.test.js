const { duplicateC } = require("../src/duplChecker.js");

describe("duplicateC()", ()=>{
    test("if found one, return true", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"L1epl","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const actual = duplicateC(data);
        const expected = true;
        expect(actual).toBe(expected);
    });
})