const _ = require("lodash");

/**
 * duplicateC()
 * ----------------------
 * check [id]s are unique or not
 * 
 * @param {object[]} data - item data we are going to use. 
 * @returns {boolean} - if all of items have unique id, return true
 */
function duplicateC(data){
    return _.every(data, a=> _.indexOf(data, a.id) == _.lastIndexOf(data, a.id));
}

module.exports = {
    duplicateC,
}