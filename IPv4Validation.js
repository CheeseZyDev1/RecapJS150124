function isValidIP(ipaddress){
    var regexExp =/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regexExp.test(ipaddress)
}
console.log(isValidIP("1.2.3.4")); 
console.log(isValidIP("1.2.3")); 
console.log(isValidIP("1.2.3.4.5")); 
console.log(isValidIP("123.45.67.89")); 
console.log(isValidIP("123.456.78.90")); 
console.log(isValidIP("123.045.067.089"));