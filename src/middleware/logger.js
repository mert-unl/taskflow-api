const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;

  console.log(timestamp);
  console.log(`${method} ${url} -- ${timestamp}`);

  next();
};

module.exports = logger;