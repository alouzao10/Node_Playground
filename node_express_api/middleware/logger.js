const logger = (req, res, next) => {
   console.log("Request Being Made ==============");
   console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
   console.log("=================================");
   next();
};

module.exports = logger;
