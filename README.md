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
console.log("node index [option] [arg1 | arg2 | ...]");
  detail : will print whole data.json`);
  detail [id] : will print [id] and its data only.
  create [prop1] [prop2] [prop3] [prop4] : will create a new data to [data.json].
    [prop] must be [name], [inStock], [description], [priceInCents] in any order & case sensitive
    [prop] must be form [name of property]=[value], without space before & after the equal sign.
  delete [id] : will delete [id] and its element from [data.json]
    delete ["name" | "id"] [name | id] : will erase [name] or [id] that provided
    will erase all the duplicated name\n
  update [id] [arg] : update [id]'s value. [arg] must be [property]=[value], no space before after equal sign

  faker [number] : will replace whole [data.json] file w/ random generated data
  add [id] : will add item [id] to [cart.json]

  remove [id] : remove whole [id] from [cart.json]

  empty : will replace [cart.json] to empty file.

  total : see total amount item in the cart.

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


### Modules

I used ___nanoid___ , ___faker-js___ , ___lodash___ , and node-fs.

### More stuffs that I might add

1. Adding `stock field` to data.json
2. More test cases
3. Adapting `readline` to accept properties without putting in the command line.