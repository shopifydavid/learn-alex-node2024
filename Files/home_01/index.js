const fs = require('fs');
const path = require('path');

module.exports = function (FileName) {
   return path.join(__filename,);
}

const pathtToFile = require('./index');
console.log(pathtToFile());