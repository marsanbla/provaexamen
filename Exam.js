
// Node.js program to demonstrate the   
// fs.open() Method
  
// Include the fs module
var fs = require('fs');
 
// Open file demo.txt in read mode
fs.open('demo.txt', 'r', function (err, f) {
  console.log('Saved!');
});