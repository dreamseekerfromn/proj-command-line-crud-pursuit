const d = require('../data/data.json');
const _ = require("lodash");

/**
 * deleteByName()
 * -----------------------
 * search by name and delete the data
 * 
 * @param {object[]} data - json file
 * @param {string} name - name to delete
 * @returns {object[]} - new updated array
 */
function deleteByName(data, name){
    return _.dropRightWhile(data, {'name': name});
}

/**
 * deleteById()
 * -----------------------
 * search by id and delete the data
 * 
 * @param {object[]} data - json file
 * @param {string} id - name to delete
 * @returns {object[]} - new updated array
 */
function deleteById(data, id){
    return _.dropRightWhile(data, {'id': id});
}

module.exports = {
    deleteByName,
    deleteById,
}