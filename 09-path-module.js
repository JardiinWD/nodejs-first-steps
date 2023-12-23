// Requiring the 'path' module to work with file and directory paths
const path = require('path');

// Logging the platform-specific path segment separator (e.g., '\' on Windows, '/' on Unix-like systems)
console.log(path.sep);

// Joining path segments to create a file path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

// Extracting the base name (last portion) of the file path
const base = path.basename(filePath);
console.log(base);

// Resolving an absolute path using the current directory (__dirname) and additional path segments
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
