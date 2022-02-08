/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    let digitStringArray = num.toString().split('');
    let digitSum = 0;
    digitStringArray.forEach(element => {
        digitSum += parseInt(element,10);
    });
    return digitSum
};

console.log(addDigits(14));