const { readJSON, writeJSON } = require("./fs");
const { searchItemById } = require("./search.js");
const _ = require("lodash");

/**
 * addToCart()
 * ------------------------
 * search item [id] and add to cart.json. 
 * 
 * @param {object[]} data - item list.
 * @param {object[]} cart - items from cart.
 * @param {string} id -item [id] which we want to add
 * @returns {object[]} - updated cart.
 */
function addToCart(data, cart, id){
    let item = searchItemById(cart, id)
    if(item){
        return _.map(cart, a => { if(a.id == id){
                                    a.amount++;
                                    return a;
                                }});
    }

    let item2 = _.find(data, a => a.id == id);
    console.log(item2)
    if (!item2){
        throw "invalid item id";
    }
    if (!item2.inStock){
        throw "out of stock";
    }
    
    item2["amount"] = 1;
    cart.push(item2);
    return cart;
}

/**
 * deleteFromCart()
 * ------------------------------
 * remove item [id] from cart.json
 * 
 * @param {object[]} cart - items from the cart.
 * @param {string} id -item [id] that we want to delete
 * @returns {object[]} - updated cart.
 */
function deleteFromCart(cart, id){
    let item = searchItemById(cart, id);

    if(item){
        item = _.map(cart, a => { if(a.id == id){
                                    a.amount--;
                                    return a;
                                }});
    }

    return _.dropRightWhile(cart, a => a.amount <= 0 );
}

/**
 * emptyCart()
 * --------------------
 * replace cart.json to empty. this function will not return any value.
 */
function emptyCart(){
    writeJSON("./data","cart.json",[]);
}

module.exports = {
    addToCart,
    deleteFromCart,
    emptyCart,
}