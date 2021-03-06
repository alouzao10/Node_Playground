// Breaking out a route to its own file
// Good to combine common routes in their own file
const express = require("express");
// The router is what will be used to reference the app
const router = express.Router();

// Load in any external data
let members = require("../../data/Members");

// Load in any modules to use within
let uuid = require("uuid");

// Returns a list of members as JSON objects
router.get("/", (req, res) => {
   res.json(members);
});

// Returns a specific member
router.get("/:id", (req, res) => {
   // access the parameters from the route path
   let params = req.params;
   //console.log(params);
   let id = parseInt(params.id);
   // Check if a member is found based on its id in the existing set
   let found = members.some((member) => member.id === id);
   if (found) {
      // Member Found = Success Status 200
      let member = members.filter((member) => member.id === id);
      res.status(200).json(member[0]);
   } else {
      // Member Not Found = Error Status 400
      res.status(400).json({ msg: `ERROR: Member id: ${id} is not found...` });
   }
});

// Creates a new member
// Using Postman to handle the request data
router.post("/", (req, res) => {
   console.log("POST Request: ", req.body); // { name: 'Jon Doe', email: 'jon@site.com' }
   //res.send(req.body);
   let newMember = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      status: "active",
   };
   if (!newMember.name || !newMember.email) {
      res.status(400).json({ msg: "ERROR: Please provide user info..." });
   } else {
      members.push(newMember);
      // Currently won't get saved to the default data set
      // Would eventually connect to a database and save the data to a table
      res.status(200).json(members);
   }
});

// Update a current member
// Using Postman to handle the request data
router.put("/:id", (req, res) => {
   console.log("PUT Request: ", req.body); // { name: 'Jon Doe', email: 'jon@site.com' }
   //res.send(req.body);
   let updatedMember = req.body; // Caputre the name and email to update
   if (!updatedMember.name || !updatedMember.email) {
      res.status(400).json({ msg: "ERROR: Please provide user info..." });
   } else {
      members.forEach((member) => {
         if (member.id === parseInt(req.params.id)) {
            member.name = updatedMember.name ? updatedMember.name : member.name;
            member.email = updatedMember.email
               ? updatedMember.email
               : member.email;
         }
      });
      res.status(200).json({
         msg: `Member id:${req.params.id} was updated`,
         members,
      });
   }
});

// Delete a member
// Using Postman to handle the request data
router.delete("/:id", (req, res) => {
   let id = parseInt(req.params.id);
   // Check if a member is found based on its id in the existing set
   let found = members.some((member) => member.id === id);
   if (found) {
      // Member Found = Success Status 200
      let member = members.filter((member) => member.id !== id);
      res.status(200).json({msg: `User id:${req.params.id} was removed.`, member});
   } else {
      // Member Not Found = Error Status 400
      res.status(400).json({ msg: `ERROR: Member id: ${id} is not found...` });
   }
});

module.exports = router;
