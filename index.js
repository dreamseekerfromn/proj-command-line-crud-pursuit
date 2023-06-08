

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
            let temp = process.argv[3] ? createArrF(Number(process.argv[3])) : createArrF(10);
            writeJSON(`./data`, 'data.json', temp);
            break;
        default:

    }
    return 0;
}