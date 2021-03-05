// Breaking out a route to its own file
// Good to combine common routes in their own file
const express = require('express');
// The router is what will be used to reference the app
const router = express.Router();

// Load in any external data
let members = require('../../data/Members');

// Returns a list of members as JSON objects
router.get('/', (req, res) => {
  res.json(members);
});

// Returns a specific member
router.get('/:id', (req, res) => {
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

module.exports = router;
