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
    str = str.split("=");
    if (str[0] == "priceInCents"){
        str[1] = Number(str[1]);
    }

    return _.map(data, (a) => {
        if(a.id == id){
            a[str[0]] = str[1];
        }
        return a;
    })
}
