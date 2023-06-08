const _ = require("lodash");

function duplicateC(data){
    return _.every(data, a=> _.indexOf(data, a.id) == _.lastIndexOf(data, a.id));
}

module.exports = {
    duplicateC,
}