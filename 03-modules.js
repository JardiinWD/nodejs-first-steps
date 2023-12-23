// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

// Importing the 'names' module from the file '04-names'
const names = require('./04-names');

// Importing the 'sayHi' function from the file '05-utils'
const sayHi = require('./05-utils');

// Importing the 'data' object from the file '06-alternative-flavor'
const data = require('./06-alternative-flavor');

// Requiring the file '07-mind-grenade' (execution, no need to assign to a variable)
require('./07-mind-grenade');

// Invoking the 'sayHi' function with the argument 'susan'
sayHi('susan');

// Invoking the 'sayHi' function with the 'john' property of the 'names' object
sayHi(names.john);

// Invoking the 'sayHi' function with the 'peter' property of the 'names' object
sayHi(names.peter);
