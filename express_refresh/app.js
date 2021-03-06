// A refresh on ExpressJS with NodeJS

// Starting file where the server will be built from

// Bring in the express module and any other modules for use
const express = require('express');
const path = require('path');

// Load in any external data
//let members = require('./data/Members');

// Load in any middleware functions for use;
let logger = require('./middleware/logger');

// Create an instance of the express environment
const app = express();
// Create the port number for the app to listen too
// Search for an active port w/in the server environment or assign one by default
const PORT_NUM = process.env.PORT || 3000;

// Set up the Body Parser middleware
app.use(express.json()); // allow to handle raw json
app.use(express.urlencoded({extended: false})); // allow to handle url encoded data

// Initialize the custom middleware for use in the app
app.use(logger);

// Load in any external routes for use
app.use('/api/members', require('./routes/api/members'));

app.get('/index', (req, res) => {
  console.log('In the Index page...');
  // The response is what gets sent back as a result of the request
  // Can send back text, object, html, http status code w/ message, file(s), render file/template/pages
  //res.send('Home Request Made');
  //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Create another route to access anther page
app.get('/about', (req, res) => {
  console.log('In the About page...');
});

// Set a static folder for the server to render on load
// Everything w/in the public folder will be rendered
// Must include all html, css, and js needed for those pages
app.use(express.static(path.join(__dirname, 'public')));

// To run the web server, the app needs to listen to a server port
// Also takes a callback to indicate when the server is running/listening
app.listen(PORT_NUM, () => {
  console.log(`Server Running on Port: ${PORT_NUM}`);
});
