module.exports = function reverse (n) {
    let reverseStr=n.toString().split('').reverse().join('');
     return (Number.parseInt(reverseStr));
}

