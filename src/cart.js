const { readJSON, writeJSON } = require("./fs");
const { searchItemById } = require("./search");

function addToCart(data, cart, id){
    let item = searchItemById(data, id);
    if (!item){
        throw "invalid item id";
    }
    cart.push(item);
    return cart;
}

function deleteFromCart(data, cart, id){
    return _.dropRightWhile(cart, {'id': id});
}

function emptyCart(data, id){
    writeJSON("../data","cart.json",[]);
}

module.exports = {
    addToCart,
    deleteFromCart,
    emptyCart,
}