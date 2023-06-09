const { createArr } = require("./src/gen.js");
const { writeJSON, readJSON } = require("./src/fs.js");
const { deleteByName, deleteById } = require("./src/delete.js");
const { addToCart, deleteFromCart, emptyCart } = require("./src/cart.js");
const { searchItemById, filterItemById } = require("./src/search.js");
const { detailView } = require("./src/detail.js");
const { create } = require("./src/create.js");
const { updateData } = require("./src/update.js");
const { totalCart } = require("./src/total.js");
const { help } = require("./src/help.js");

/**
 * run()
 * -------------------
 * main function to handle argv & try/catch errors.
 * @returns {number} - return 0 for success, -1 for errors.
 */
function run(){
    /** declare vars */
    const argc = process.argv.length;
    let data;
    let cart;
    let wFlag = false;

    /** 
     * readFs block, if failed it will automatically generate empty data.json & cart.json.
     */
    try{
        data = readJSON('./data', 'data.json');
    } catch(err){
        if(err){
            writeJSON(`./data`, 'data.json', []);
            console.log("./data/data.json is missing.");
            return -1;
        }
    }

    try{
        cart = readJSON("./data", "cart.json");
    } catch(err){
        if(err ){
            writeJSON("./data", "cart.json", []);
            console.log("cart.json is missing");
            return -1;
        }
    }
    /** readFS block ends */

    /** switch block starts */
    switch(process.argv[2]){
        case "create":
            switch(argc){
                /** ToDo: implementing readline */
                /*case 3:
                    console.log("Name:");
                    console.log("priceIncents:");
                    console.log("inStock:");
                    console.log("description:");
                    break;*/
                case 7:
                    let createdTemp;
                    try{
                        createdTemp = create(data, process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
                    }
                    catch(err){
                        console.log(err);
                        return -1;
                    }
                    writeJSON(`./data`, 'data.json', createdTemp);
                    wFlag = true;
                    break;
                default:
                    console.log("worng value");
                    return -1;
            }
            break;
        case "delete":
            if(argc == 3 || argc > 5){
                console.log("wrong input");
                return -1;
            }
            if(argc == 4){
                let deletedTemp = deleteById(data, process.argv[3]);
                writeJSON(`./data`, 'data.json', deletedTemp);
                wFlag = true;
            }
            else{
                switch(process.argv[3]){
                    case "name":
                        let deletedTempByName = deleteByName(data, process.argv[4]);
                        writeJSON(`./data`, 'data.json', deletedTempByName);
                        wFlag = true;

                        break;
                    case "id":
                        let deletedTempById = deleteById(data, process.argv[4]);
                        writeJSON(`./data`, 'data.json', deletedTempById);
                        wFlag = true;
                        break;
                    default:
                        console.log("wrong input");
                        return -1;
                }
            }
            break;
        case "update":
            let updatedTemp;
            
            try{
                updatedTemp = updateData(data, process.argv[3], process.argv[4]);
            }
            catch(err){
                if(err){
                    console.log(err);
                    return -1;
                }
            }
            writeJSON('./data', "data.json", updatedTemp);
            wFlag = true;
            break;
        case "detail":
            switch(argc){
                case 3:
                    detailView(data);
                    break;
                case 4:
                    detailView(filterItemById(data,process.argv[3]));
                    break;
                default:
                    console.log("wrong command");
                    return -1;
            }
            break;
        case "faker":
            let temp = process.argv[3] ? createArr(Number(process.argv[3])) : createArr(10);
            console.log(temp);
            writeJSON(`./data`, 'data.json', temp);
            wFlag = true;
            break;
        case "add":
            let addItem;
            try{
                addItem = addToCart(data, cart, process.argv[3]);
            }
            catch(err){
                console.log(`Error : ${err}`);
                return -1;
            }
            console.log(addItem)
            writeJSON('./data', 'cart.json', addItem);
            wFlag = true;
            break;
        case "remove":
            let removeItem = deleteFromCart(cart, process.argv[3]);
            writeJSON('./data', 'cart.json', removeItem);
            wFlag = true;
            break;
        case "empty":
            emptyCart();
            wFlag = true;
            break;
        case "total":
            totalCart(cart);
            break;
        case "help":
            help();
            break;
        default:
            console.log("type node index.js help");
    }
    /** switch block ends */

    if(wFlag){
        console.log("JSON file(s) has been written.");
    }

    return 0;
}

run();