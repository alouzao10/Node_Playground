// Creating a practice REST API with Node and Express

// Bringing in the express module
const express = require("express");
// Setting a port number for the server to run on
const PORT_NUM = process.env.PORT || 3000;
// Creating an instance of the express server
const app = express();

// Use external routes within the app server
app.use("/api/courses", require("./routes/api/courses"));

app.get("/", (req, res) => {
   res.status(200).send("Hello API");
});

// Run the web server at the specified port
app.listen(PORT_NUM, () => {
   console.log(`Server Running On Port: ${PORT_NUM}`);
});
