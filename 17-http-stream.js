// Requiring the 'http' and 'fs' modules
var http = require('http');
var fs = require('fs');

// Creating an HTTP server
http
  .createServer(function (req, res) {
    // Uncomment the following lines to read and send the entire content synchronously
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);

    // Creating a readable stream to read the content of 'big.txt'
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');

    // Event handler for when the file stream is open
    fileStream.on('open', () => {
      // Piping the content of the file stream to the response stream
      fileStream.pipe(res);
    });

    // Event handler for any errors that occur during file stream operations
    fileStream.on('error', (err) => {
      // Sending the error message as the response
      res.end(err);
    });
  })
  // Listening on port 5000
  .listen(5000);
