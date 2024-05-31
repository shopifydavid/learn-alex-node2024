module.exports = function (num1 = 0, num2 = 0) {
    if (num1 > num2 || num1 == num2) {
        return num1;
    }
    return num2;
}
const biggestNum = require('./index');
console.log(biggestNum(9, 7));