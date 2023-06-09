const chalk = require("chalk");
const _ = require("lodash");

/**
 * detailView()
 * ---------------------
 * log items w/ all of properties.
 * 
 * @param {object[]} data - our items that we want to log. 
 */
function detailView(data){
    for(let index = 0; index < data.length; index++){
        console.log(
            chalk.cyan(`id \t`) + `${data[index].id} `.padEnd(10) 
            + chalk.cyan(`name \t`) + `${data[index].name} `.padEnd(25) 
            + chalk.cyan(`priceInCents \t`) + `${data[index].priceInCents} `.padEnd(10) 
            + chalk.cyan(`inStock `) +  chalk.yellow(`${data[index].inStock}`.padEnd(10))
            + chalk.cyan(`\ndescription\n `) +  chalk.green(`${data[index].description}`));
    }
}



module.exports = {
    detailView,
}