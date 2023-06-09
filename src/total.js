/**
 * totalCart()
 * -----------------------
 * Calculate & log the total cost of items in the cart.
 * 
 * @param {object[]} data - cart that we want to log the total cost. 
 */
function totalCart(data){
    let total = 0;
    for(let index = 0; index < data.length; index++){
        console.log(`${data[index].name}\t\t${data[index].amount}\t\t${data[index].priceInCents * data[index].amount}`);
        total += data[index].priceInCents * data[index].amount;
    }
    console.log(`ToTal: $${Number(total/100).toFixed(2)}`);
}

module.exports = {
    totalCart,
}