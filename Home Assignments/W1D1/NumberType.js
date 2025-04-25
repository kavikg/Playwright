function numberchk(num1) {
    if (num1 > 0) {
        return "The number is Positive"
    }
    else if (num1 < 0) {
       return "The number is Negative"
    }
    else {
         return "The number is neither Positive nor Negative"
    }
}
console.log(numberchk(45))
console.log(numberchk(0))
console.log(numberchk(-34))