// Project: explore os code
// Author: Samantha Thorne
// Date: 18/05/2024


// require os
var os = require('os');

console.log("OS Information:")

// Platform info
console.log("Platform: " + os.platform());

// Release info
console.log("Release: " + os.release());

// OS type
console.log("Type: " + os.type());

// Amount of free memory in this OS
console.log("Free memory: " + os.freemem());