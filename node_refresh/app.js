// Node Refresh

// Use of Global Objects w/in Node
/*
    global.
    console.log()
    setTimeout()
    clearTimeout()
    setInterval()
    clearInterval()

    Used w/in scope of browsers
    window.
    document. 
*/

// Use of Modules
/*
    Modules can be used to break up variables and functions externally
    Can be used to clean up code and include certain elements to perform certain tasks
    Every Node app has at least 1 module, the main JS file used to execute the app
    Modules must be exported to be accessed publicly by the app
*/

// Load in an external module
const logger = require('./logger.js');
logger.logMessage('Hello Module...');
