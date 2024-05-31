module.exports = function (arr = []) {    
    return Math.max(...arr)
}
const biggestArrValue = require('./index');
console.log(biggestArrValue([2, 3, 4, 5, 99, 999, -11]));