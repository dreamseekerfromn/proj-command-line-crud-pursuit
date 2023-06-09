const { create } = require("../src/create.js");

describe("create()", ()=>{
    test("does this function return in the right form?", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const actual = create(data, "name=jfk", "description=ahahahah", "priceInCents=10", "inStock=false");
        const expected = 4
        expect(actual.length).toBe(expected);
    });
    test("does this function filter incorrect property correctly?", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const actual = create(data, "name=jfk", "ion=ahahahah", "priceInCents=10");
        const expected = 3
        console.log(actual)
        expect(actual.length).toBe(expected);
    });
})