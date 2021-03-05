// Create middleware functions to execute on requests/paths
// Every time a request is made, this will run
const logger = (req, res, next) => {
  console.log('==== Logger Middleware Message ====');
  // Access elements from the request url
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log('==== XXXXXXXXXXXXXXXXXXXXXXXXX ====');

  next();
};

module.exports = logger;
