// Requiring the 'os' module to access operating system-related information
const os = require('os');

// Fetching information about the current user
const user = os.userInfo();
console.log(user);

// Logging the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

// Creating an object 'currentOS' with properties containing various information about the operating system
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

// Logging the 'currentOS' object to the console
console.log(currentOS);
