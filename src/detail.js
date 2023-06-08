const chalk = require("chalk");
const _ = require("lodash");

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

function detailSingle(data){
    console.log(
        chalk.cyan(`id \t`) + `${data.id} `.padEnd(10) 
        + chalk.cyan(`name \t`) + `${data.name} `.padEnd(25) 
        + chalk.cyan(`priceInCents \t`) + `${data.priceInCents} `.padEnd(10) 
        + chalk.cyan(`inStock `) +  chalk.yellow(`${data.inStock}`.padEnd(10))
        + chalk.cyan(`\ndescription\n `) +  chalk.green(`${data.description}`));
    
}

module.exports = {
    detailView,
    detailSingle,
}