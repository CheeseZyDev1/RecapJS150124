function isValidIP(ipaddress){
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ipaddress);
}
console.log(isValidIP("1.2.3.4"));    // true
console.log(isValidIP("1.2.3"));      // false
console.log(isValidIP("1.2.3.4.5"));   // false
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("123.456.78.90"));// false
console.log(isValidIP("123.045.067.089")); // false