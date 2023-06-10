const { nanoid } = require("nanoid");
const d = require("../data/data.json");
const _ = require("lodash");
const { duplicateC } = require("./duplChecker");

/**
 * create()
 * -----------------------------------
 * create new data to the json file
 * 
 * @param {object[]} data - JSON file, which is our item data.
 * @param  {...string} inputStream - input string with "[property]=[value]" format
 * @returns {object[]} - it will be used to write our data.
 */
function create(data = d, ...inputStream){
    const prop = ['name','priceInCents','inStock','description'];

    if(inputStream.length != 4){
        throw "not enough properties."
    }

    let field1 = inputStream[0].split("=");
    let field2 = inputStream[1].split("=");
    let field3 = inputStream[2].split("=");
    let field4 = inputStream[3].split("=");

    const newObj = {
        id: nanoid(4),
        [field1[0]]:field1[1],
        [field2[0]]:field2[1],
        [field3[0]]:field3[1],
        [field4[0]]:field4[1],
    }

    /** typecast section */
    for(let prop in newObj){
        if(prop === "priceInCents"){
            newObj[prop] = Number(newObj[prop]);
        }
        else if(prop === "isStock"){
            newObj[prop] = Boolean(newObj[prop]);
        }
    }

    /** validation */
    if(!prop.every(prop => _.has(newObj,prop))){
        throw "error: wrong property is detected.";
    }
    if(newObj.priceInCents < 0){
        throw "error: priceInCents cannot be negative";
    }
    if(newObj.priceInCents == NaN){
        throw "error: wrong value is inputted to [priceInCents]";
    }
    
    data.push(newObj);

    /** duplicated id chk */
    if(!duplicateC(data)){
        data = _.map(data, a => { if(data.indexOf(a.id) !== data.lastIndexOf(a.id)){
            a.id = nanoid(5);
            return a;
        }});
    }

    return data;
}

module.exports = {
    create,
}