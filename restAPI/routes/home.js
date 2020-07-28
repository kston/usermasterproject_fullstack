module.exports = (app) => {
  app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end('<h1>New Api</h1><p>Learning how to build an API</p>');
  });
};
