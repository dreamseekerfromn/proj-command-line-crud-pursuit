const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");

/**
 * createObj()
 * -----------------------------
 * generate new data w/ faker
 * 
 * @returns {object} - return new object w/ fake values.
 */
function createObj(){
    const jsonObj = {
        id: nanoid(5),
        name: 
        amount: faker.number.float({min: 1, max: 1000000, precision: 0.01}),
        priceInCents:,
        inStock:,
        description:,
    }

    return jsonObj;
}