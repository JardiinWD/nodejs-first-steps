// Requiring the 'readFileSync' and 'writeFileSync' functions from the 'fs' module
const { readFileSync, writeFileSync } = require('fs');

// Logging a message indicating the start of the script
console.log('start');

// Reading the content of the 'first.txt' and 'second.txt' files synchronously
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Writing the combined content of 'first.txt' and 'second.txt' to 'result-sync.txt' with an append flag
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

// Logging a message indicating the completion of the current task
console.log('done with this task');

// Logging a message indicating the start of the next task
console.log('starting the next one');
