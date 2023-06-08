const _ = require("lodash");

function searchItemById(data, id){
    return _.find(data, a => a.id == id);
}

module.exports = {
    searchItemById,
}