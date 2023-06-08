const _ = require("lodash");

/**
 * updateData()
 * ----------------------
 * update [id]'s [property] w/ new value.
 * @param {object[]} data - from json file.
 * @param {string} id -id that we want to update.
 * @param {string} str - must be "property=value" 
 * @returns {object[]} - new data set w/ an array form.
 */
function updateData(data, id, str){
    const props = ['name','priceInCents','inStock','description'];
    str = str.split("=");

    if(!props.some(a => _.has(props, str[0]))){
        throw "Wrong property";
    }

    if (str[0] == "priceInCents"){
        str[1] = Number(str[1]);
        if(str[1] == NaN){
            throw "Wrong value";
        }
        if(str1[1] < 0){
            throw "Cannot be negative";
        }
    }
    else if(str[0] == "isStock"){
        str[1] = Boolean(str[1]);
    }

    return _.map(data, (a) => {
        if(a.id == id){
            a[str[0]] = str[1];
        }
        return a;
    })
}

module.exports = {
    updateData,
}