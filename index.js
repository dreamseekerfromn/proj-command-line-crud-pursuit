const { createArr } = require("./src/gen.js");
const { writeJSON, readJSON } = require("./src/fs.js");
const { deleteByName, deleteById } = require("./src/delete.js");
const { addToCart, deleteFromCart, emptyCart } = require("./src/cart.js");
const { searchItemById } = require("./src/search.js");

function run(){
    const argc = process.argv.length;
    let data;
    let cart;

    try{
        data = readJSON('./data', 'data.json');
    } catch(err){
        if(err === 'ENOENT'){
            writeJSON(`./data`, 'data.json', []);
            console.log("./data/data.json is missing.");
            return -1;
        }
        else{
            console.log(`Error: ${err}`);
            writeJSON(`./data`, 'data.json', []);
            return -1;
        }
    }

    try{
        cart = readJSON("./data", "cart.json");
    } catch(err){
        if(err == "ENOENT"){
            writeJSON("./data", "cart.json", []);
            console.log("cart.json is missing");
            return -1;
        }
        else{
            console.log(`${err}`);
            writeJSON("./data", "cart.json", []);
            return -1;
        }
    }

    switch(process.argv[2]){
        case "create":
            break;
        case "delete":
            if(argc == 3 || argc > 5){
                break;
            }
            if(argc == 4){
                let deletedTemp = deleteById(data, process.argv[3]);
                writeJSON(`./data`, 'data.json', deletedTemp);
            }
            else{
                switch(process.argv[3]){
                    case "name":
                        let deletedTempByName = deleteByName(data, process.argv[4]);
                        writeJSON(`./data`, 'data.json', deletedTempByName);
                        break;
                    case "id":
                        let deletedTempById = deleteById(data, process.argv[4]);
                        writeJSON(`./data`, 'data.json', deletedTempById);
                        break;
                    default:
                        break;
                }
            }
            break;
        case "update":
            break;
        case "detail":
            console.log(data);
            break;
        case "faker":
            let temp = process.argv[3] ? createArr(Number(process.argv[3])) : createArr(10);
            console.log(temp);
            writeJSON(`./data`, 'data.json', temp);
            break;
        case "add":
            let addItem = addToCart(data, cart, process.argv[3]);
            writeJSON('./data', 'cart.json', addItem);
            break;
        case "remove":
            let removeItem = deleteFromCart(cart, process.argv[3]);
            writeJSON('./data', 'cart.json', removeItem);
            break;
        case "empty":
            emptyCart();
            break;
        default:

    }
    return 0;
}

run();