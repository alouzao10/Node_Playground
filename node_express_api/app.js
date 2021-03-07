// Creating a practice REST API with Node and Express

// Bringing in the express module
const express = require("express");
// Bring in any middleware moduels
const logger = require("./middleware/logger");
// Setting a port number for the server to run on
const PORT_NUM = process.env.PORT || 3000;
// Creating an instance of the express server
const app = express();

// Set up the Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use the custome middleware fucntion
app.use(logger);

// Use external routes within the app server
app.use("/api/courses", require("./routes/api/courses"));

app.get("/", (req, res) => {
   res.status(200).send("Hello API");
});

// Run the web server at the specified port
app.listen(PORT_NUM, () => {
   console.log(`Server Running On Port: ${PORT_NUM}`);
});
