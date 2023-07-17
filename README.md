# Command-line Inventory Application Project

## Introduction

A pursuit 10.2 project to handle inventory with command line. This project has only some of the basic functionalitis that an inventory application has. So no encryption, no web programming stuffs (like php, html, css and some other server-side programming) beside javascript.

## Usage

This application needs an option to operate. 
The command should be ***node index.js [option] (arg1 | ...)***

like...
```
  node index.js help
  node index.js create name=abc inStock=true priceInCents=500 "description=aaa bbb"
```

## Options

All of the options are case sensitive and low cases only.

basic syntax is 
```
node index [option] [arg1 | arg2 | ...]
```

option can be __detail__, __create__, __delete__, __update__, __faker__, __add__, __remove__, __empty__, __total__.
detail/create/delete/update/faker for data.
add/remove/empty/total for cart.

arg is "argument".
arg can be __id__, or name of __property__ in the data.
properties are __name__, __inStock__, __description__, __priceInCents__. properties are case sensitive.
```
  //detail : will print whole data.json`;
  //detail [id] : will print [id] and its data only.
  node index.js ASDFE //will show single item id [ASDFE] from the data.

  //create [prop1] [prop2] [prop3] [prop4] : will create a new data to [data.json].
  //  [prop] must be [name], [inStock], [description], [priceInCents] in any order & case sensitive
  //  [prop] must be form [name of property]=[value], without space before & after the equal sign.
  //example: this command will generate item name [abc] inStock is [true], priceInCents [500], and item description [aaa bbb] to the data.
  node index.js create name=abc inStock=true priceInCents=500 "description=aaa bbb"
  
  //delete [id] : will delete [id] and its element from [data.json]
  node index.js delete ASDFE //will erase item id [ASDFE] from the data.
  //  delete ["name" | "id"] [name | id] : will erase [name] or [id] that provided
  //  will erase all the duplicated name\n
  node index.js delete "name" ASDFE // will search name [ASDFE] from the data, and remove.

  //update [id] [arg] : update [id]'s value. [arg] must be [property]=[value], no space before after equal sign
  node index.js ASDFE name=AHAHAH //will replace item id [ASDFE]'s name to [AHAHAH]

  //faker [number] : will replace whole [data.json] file w/ random generated data
  node index.js faker 10 //will generate 10 random items to the data.

  //add [id] : will add item [id] to [cart.json]
  node index.js ASDFE // will add item id [ASDFE] to the cart.

  //remove [id] : remove whole [id] from [cart.json]
  node index.js ASDFE // will remove item id [ASDFE] from the cart.

  //empty : will replace [cart.json] to empty file.
  node index.js empty

  //total : see total amount item in the cart.
  node.js index.js total
```
## Npm scripts

    "test": "jest"
    "detail": "node index.js detail"
    "create": "node index.js create"
    "update": "node index.js update"
    "add": "node index.js add"
    "remove": "node index.js remove"
    "delete": "node index.js delete"
    "help": "node index.js help"
    "faker": "node index.js faker"
    "ten": "node index.js faker 10"
    "empty": "node index.js empty"
    "total: "node index.js total"


### Modules

I used ___nanoid___ , ___faker-js___ , ___lodash___ , and node-fs.

### More stuffs that I might add

1. Adding `stock field` to data.json
2. More test cases
3. Adapting `readline` to accept properties without putting in the command line.