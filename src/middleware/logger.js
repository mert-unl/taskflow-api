const logger = (req, res, next) => {
  const now = new Date();
  const timestamp =
    `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()} ` +
    `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const method = req.method;
  const url = req.originalUrl;
  
  console.log(`${method} ${url} || ${timestamp}`);

  next();
};

module.exports = logger;
