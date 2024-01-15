function isValidIP(ipaddress){
    const parts = ipaddress.split('.');

    if (parts.length !== 4) {
        return false;
    }

    for (const part of parts) {
        const num = parseInt(part, 10);

        if (isNaN(num) || num < 0 || num > 255 || (num !== 0 && part.startsWith('0'))) {
            return false; // แต่ละส่วนต้องเป็นตัวเลขระหว่าง 0 ถึง 255 และไม่มี 0 นำหน้าตัวเลขที่ไม่ใช่ 0
        }
    }

    return true;
}
console.log(isValidIP("1.2.3.4"));    // true
console.log(isValidIP("1.2.3"));      // false
console.log(isValidIP("1.2.3.4.5"));   // false
console.log(isValidIP("123.45.67.89")); // true
console.log(isValidIP("123.456.78.90"));// false
console.log(isValidIP("123.045.067.089")); // false