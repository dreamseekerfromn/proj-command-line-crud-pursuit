/**
 * help()
 * -------------------
 * baisc infos
 */
function help(){
    console.log("node index [option] [arg1 | arg2 | ...]");
    console.log(`\nOption List:\n`);
    console.log(`detail : will print whole data.json`);
    console.log(`detail [id] : will print [id] and its data only\n`);
    console.log(`create [prop1] [prop2] [prop3] [prop4] : \n will create a new data to [data.json]`);
    console.log(`\t\t[prop] must be [name], [inStock], [description], [priceInCents] in any order & case sensitive`);
    console.log(`\t\t[prop] must be form [name of property]=[value], without space before & after the equal sign\n`);
    console.log(`delete [id] : will delete [id] and its element from [data.json]`);
    console.log(`delete ["name" | "id"] [name | id] : will erase [name] or [id] that provided`);
    console.log(`\t\twill erase all the duplicated name\n`);
    console.log(`update [id] [arg] : update [id]'s value. [arg] must be [property]=[value], no space before after equal sign\n`);
    console.log(`faker [number] : will replace whole [data.json] file w/ random generated data\n`);
    console.log(`add [id] : will add item [id] to [cart.json]\n`);
    console.log(`remove [id] : remove whole [id] from [cart.json]\n`);
    console.log(`empty : will replace [cart.json] to empty file.\n`);
    console.log('total : see total amount item in the cart.');
}

module.exports = {
    help,
}