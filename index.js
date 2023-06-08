const { createArr } = require("./src/gen.js");
const { writeJSON } = require("./src/fs.js");
const { deleteByName, DeleteById } = require("./src/delete.js");
const d = require('../data/data.json');

function run(){
    const argc = process.argv.length;
    switch(process.argv[2]){
        case "create":
            break;
        case "delete":
            if(argc == 3 || argc > 5){
                break;
            }
            if(argc == 4){
                let deletedTemp = deleteById(d, process.argv[3]);
                writeJSON(`./data`, 'data.json', deletedTemp);
            }
            else{
                switch(process.argv[3]){
                    case "name":
                        let deletedTempByName = deleteByName(d, process.argv[4]);
                        writeJSON(`./data`, 'data.json', deletedTempByName);
                        break;
                    case "id":
                        let deletedTempById = deleteById(d, process.argv[4]);
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
            console.log(d);
            break;
        case "faker":
            let temp = process.argv[3] ? createArr(Number(process.argv[3])) : createArr(10);
            console.log(temp);
            writeJSON(`./data`, 'data.json', temp);
            break;
        default:

    }
    return 0;
}

run();