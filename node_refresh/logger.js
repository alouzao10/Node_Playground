// External Module for app.js
let phrase = 'Cool Story Bro!';

// Load in the events module
const EventEmitter = require('events');
//const emitter = new EventEmitter();

// Create a class to be exported for the emitter to have access
class Logger extends EventEmitter {
  logMessage = (msg) => {
    // Send a request
    console.log(`In the Logger Module...${phrase}`);
    console.log(msg);
    this.emit('messageLogged', { id: 5, url: 'Logger Event' });
  };
}
/*let logMessage = (msg) => {
  // Send a request
  console.log(`In the Logger Module...${phrase}`);
  console.log(msg);
  emitter.emit('messageLogged', { id: 5, url: msg });
};*/

// Use to export the module to the main app file
// Name can be renamed on the assignment
//module.exports.logMessage = logMessage;
//module.exports.message = phrase;
module.exports = Logger;

// Export a single item like a function
// module.exports = logMessage;
// overwrites the exports property to the logMessage function
// can be called directly when assigned from the require
