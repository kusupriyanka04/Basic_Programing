function isEvenOrOdd(num){
    if(num % 2 === 0){
      console.log("Even Number");
      return true;
    }else return false;
    if(num % 2 !== 0){
      console.log("Odd Number");
      return true;
    }else return false;
}
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(9));
