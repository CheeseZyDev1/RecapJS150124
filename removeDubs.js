function removeDups(arr) {
    const set = new Set(arr);
    const newArr = [...set];
  
    return newArr;
  }
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","Big","cat"]));
console.log(removeDups(["John","Tyler","John"]));
  