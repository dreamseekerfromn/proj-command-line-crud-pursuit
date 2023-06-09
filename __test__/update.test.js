const { updateData } = require("../src/update.js");

describe("updateData()", ()=>{

    test("does this function return in the right form?", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const actual = updateData(data, "L1epl", "name=John Dow");
        const expected = [
            {"id":"L1epl","name":"John Dow","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
        ];
        expect(actual).toStrictEqual(expected);
    })
});