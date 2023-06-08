const { createArr } = require("./src/gen.js");
const { writeJSON } = require("./src/fs.js");

function run(){
    const argc = process.argv.length;
    switch(process.argv[2]){
        case "add":
            break;
        case "delete":
            break;
        case "update":
            break;
        case "detail":
            break;
        case "faker":
            let temp = process.argv[3] ? createArr(Number(process.argv[3])) : createArr(10);
            writeJSON(`./data`, 'data.json', temp);
            break;
        default:

    }
    return 0;
}