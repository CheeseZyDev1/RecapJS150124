const highestDigit = (n)=>{
   if (n === 0){
    return 0;
   }else {
        return Math.max(n%10,highestDigit(Math.floor(n/10)));
    }
};
console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));