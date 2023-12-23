// Requiring the 'http' module
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Uncomment the following block for handling requests using if statements
  /*
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
  }
  */

  // Comment out the above block and uncomment the following block for handling requests using if, else if, else statements
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Here is our short history');
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
  }
});

// Listening on port 5000
server.listen(5505);
