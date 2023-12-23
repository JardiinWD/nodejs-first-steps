// Requiring the 'readFile' and 'writeFile' functions from the 'fs' module
const { readFile, writeFile } = require('fs');

// Logging a message indicating the start of the script
console.log('start');

// Reading the content of 'first.txt' asynchronously
readFile('./content/first.txt', 'utf8', (err, result) => {
  // Handling errors during file read
  if (err) {
    console.log(err);
    return;
  }

  // Storing the content of 'first.txt' in the variable 'first'
  const first = result;

  // Reading the content of 'second.txt' asynchronously
  readFile('./content/second.txt', 'utf8', (err, result) => {
    // Handling errors during file read
    if (err) {
      console.log(err);
      return;
    }

    // Storing the content of 'second.txt' in the variable 'second'
    const second = result;

    // Writing the combined content of 'first.txt' and 'second.txt' to 'result-async.txt'
    writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
      // Handling errors during file write
      if (err) {
        console.log(err);
        return;
      }

      // Logging a message indicating the completion of the current task
      console.log('done with this task');
    });
  });
});

// Logging a message indicating the start of the next task
console.log('starting next task');
