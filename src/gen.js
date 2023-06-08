const { faker } = require("@faker-js/faker");
const { nanoid } = require("nanoid");
const { duplicateC } = require("./duplChecker");

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
        name: faker.commerce.productName(),
        priceInCents:faker.number.int({min: 1, max: 100000 }),
        inStock:faker.datatype.boolean(),
        description:faker.commerce.productDescription(),
    }

    return jsonObj;
}

/**
 * createArr()
 * -----------------------
 * create new data in array form. 
 * 
 * @param {number} num - number of data, you want to create 
 * @returns {object[]} - data w/ array form
 */
function createArr(num){
    const arr = [];
    for(let index = 0; index < num; index++){
        arr.push(createObj());
    }
    
    if(!duplicateC(arr)){
        arr = _.map(arr, a => { if(data.indexOf(a.id) !== data.lastIndexOf(a.id)){
                                    a.id = nanoid(5);
                                    return a;
                                }});
    }

    return arr;
}

module.exports = {
    createArr,

}