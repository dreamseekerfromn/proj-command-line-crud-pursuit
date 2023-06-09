const _ = require("lodash");

/**
 * searchItemById()
 * -----------------------
 * search element that has [id] as its @property [id].
 * 
 * @param {object[]} data - item data that we are going to use 
 * @param {string} id - item [id] we want to search
 * @returns {object} - returns searched element that has [id]
 */
function searchItemById(data, id){
    return _.find(data, a => a.id == id);
}

/**
 * filterItemById()
 * -----------------------
 * fileter array of elements that has [id] as its @property [id].
 * 
 * @param {object[]} data - item data that we are going to use 
 * @param {string} id - item [id] we want to search
 * @returns {object[]} - returns searched element that has [id]
 */
function filterItemById(data, id){
    return _.filter(data, a => a.id == id);
}

module.exports = {
    searchItemById,
    filterItemById,
}