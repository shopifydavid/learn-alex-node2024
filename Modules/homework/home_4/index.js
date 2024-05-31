module.exports = function (str = '') {    
    str = str.trim().toLowerCase();
    return str;
}
const clearStr = require('./index');
console.log(clearStr('                                  ASASS SAD AS ss    '));