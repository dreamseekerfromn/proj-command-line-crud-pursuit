const _ = require("lodash");

function searchItemById(data, id){
    return _.filter(data, a => a.id == id);
}

module.exports = {
    searchItemById,
}