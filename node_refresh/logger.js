// External Module for app.js
let phrase = 'Cool Story Bro!';

let logMessage = (msg) => {
  // Send a request
  console.log(`In the Logger Module...${phrase}`);
  console.log(msg);
};

// Use to export the module to the main app file
// Name can be renamed on the assignment
module.exports.logMessage = logMessage;
module.exports.message = phrase;

// Export a single item like a function
// module.exports = logMessage;
// overwrites the exports property to the logMessage function
// can be called directly when assigned from the require
