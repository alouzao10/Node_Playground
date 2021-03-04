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
const Logger = require('./logger.js');
const logger = new Logger();
logger.on('messageLogged', (e) => {
  console.log('Event Message Has Been Logged...');
  console.log('Event Argument...', e);
});
logger.logMessage('Hello Module...');

// Load in the path module
const path = require('path');
var pathFile = path.parse(__filename);
console.log(pathFile);
var pathDir = path.parse(__dirname);
console.log(pathDir);

// Load in the os module
const os = require('os');
var totalMem = os.totalmem();
console.log(`Total Memory = ${totalMem}`);
var freeMem = os.freemem();
console.log(`Free Memory = ${freeMem}`);

// Load in the fs module
const fs = require('fs');
// Sync Method
var files = fs.readdirSync('./');
console.log(files);
// Async Method
/*fs.readdir('./', function (err, files) {
  if (err) {
    console.log('fs read ERROR...');
  } else {
    console.log('fs read SUCCESS...', files);
  }
});

fs.readdir('./something', function (err, files) {
  if (err) {
    console.log('fs read ERROR...', err);
  } else {
    console.log('fs read SUCCESS...', files);
  }
});*/

// Load in the events module
const EventEmitter = require('events');
const emitter = new EventEmitter();
// Register an event listener to capture the event
// The listener can receive the argument (arg / e)
emitter.on('messageLogged', (e) => {
  console.log('Event Message Has Been Logged...');
  console.log('Event Argument...', e);
});
// Raise an event / event will be called
// Pass in an argument to better id the event
emitter.emit('messageLogged', { id: 1, url: 'https://' });

// Load in the http module
const http = require('http');
// Creates a web server, acts as an EventEmitter
// Can capture the server requests and provide responses as a result
const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Hello Home');
    response.end();
  } else if (request.url === '/about') {
    response.write('Hello About');
    response.end();
  }
  // Can capture data from an API and return into the code for use
  if (request.url === '/api/courses') {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
});
const PORT_NUM = 3000;
// Creates an even handler based on the event, such as connecting to the server
server.on('connection', (socket) => {
  console.log(`Connection Made on Server: ${PORT_NUM}`);
});
// Have the server listen to a specific server port number
server.listen(PORT_NUM);
