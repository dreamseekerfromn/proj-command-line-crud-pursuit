const { addToCart, deleteFromCart, emptyCart } = require("../src/cart.js");

describe("addToCart()", ()=>{
    test("adding an item to empty cart", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const cart = [];
        const actual = addToCart(data, cart, "L1epl");
        const expected = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":1}];
        expect(actual).toStrictEqual(expected);
    });
    test("adding an item to exising cart", () => {
        const data = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes"},
                {"id":"RBs69","name":"Handmade Bronze Cheese","priceInCents":83012,"inStock":false,"description":"The Apollotech B340 is an affordable "},
                {"id":"haBmG","name":"Fantastic Soft Salad","priceInCents":50030,"inStock":false,"description":"New range of "}
                ];
        const cart = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":1}];
        const actual = addToCart(data, cart, "L1epl");
        const expected = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":2}];
        expect(actual).toStrictEqual(expected);
    })
});

describe("deleteFromCart()", ()=>{
    test("delete 1 from cart", () => {
        const cart = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":2}];
        const actual = deleteFromCart(cart, "L1epl");
        const expected = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":1}];
        expect(actual).toStrictEqual(expected);
    });
    test("remove completely from the cart (amount 0)?", () => {
        const cart = [{"id":"L1epl","name":"Elegant Bronze Car","priceInCents":48647,"inStock":true,"description":"The Football Is Good For Training And Recreational Purposes","amount":1}];
        const actual = deleteFromCart(cart, "L1epl");
        const expected = [];
        expect(actual).toStrictEqual(expected);
    })
});
