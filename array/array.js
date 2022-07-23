// Creating number line 

var zero = 0;
var positiveNumbers = [1,2,3,4,5];
var negativeNumbers = [-1,-2,-3,-4,-5]
var numbers = negativeNumbers.concat(zero,positiveNumbers); // concatinating two or more strings
console.log(numbers);


var isEven = function(x){
    // return true if x is multiple of 2
    console.log(x);
    return (x%2 == 0) ? true : false
}
var number1 = [1,2,3,4,5,6,7,8,9,10,11,12];