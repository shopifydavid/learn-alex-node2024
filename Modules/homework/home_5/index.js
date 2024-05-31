module.exports = function (str = '') {    
    const arr = str.trim().replace(/\s/g, '').split('');
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomElement = arr[randomIndex];
    return randomElement;
}
const clearStr = require('./index');
console.log(clearStr('                   333               ASASS SAD AS ss    '));