const { nanoid } = require("nanoid");
const d = require("../data/data.json");
const _ = require("lodash");

/**
 * create()
 * -----------------------------------
 * create new data to the json file
 * 
 * @param {object[]} data - JSON file, 
 * @param  {...string} inputStream - input string with "[property]=[value]" format
 * @returns {object[]} - it will be used to write our data.
 */
function create(data = d, ...inputStream){
    console.log(inputStream)
    const prop = ['id','name','priceInCents','inStock','description'];

    if(inputStream.length != 4){
        return data;
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

    for(let prop in newObj){
        if(prop === "priceInCents"){
            newObj[prop] = Number(newObj[prop]);
        }
        else if(prop === "isStock"){
            newObj[prop] = Boolean(newObj[prop]);
        }
    }

    if(!prop.every(prop => _.has(newObj,prop))){
        throw "error: wrong property is detected.";
    }
    if(newObj.priceInCents < 0){
        throw "error: priceInCents cannot be negative";
    }
    if(newObj.priceInCents == NaN){
        throw "error: wrong value is inputted to [priceInCents]"
    }
    
    data.push(newObj);
    return data;
}

module.exports = {
    create,
}