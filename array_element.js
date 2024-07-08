let numbers = [3, 56, 23, 78, 23, 78, 100, 123, 148, 193, 190, -190, 210, 34, 67, 3, 78, 210, 23, 34, 50, 59, 89, 87, 230, 210, 100, 23, 980 ];


//1.a
numbers.sort(lowToHigh)
console.log(numbers);
function lowToHigh(a, b){

return a-b;
}

//1.a
numbers.sort(highToLowest);
console.log(numbers);
function highToLowest(a,b){

    return b-a;
}

//1.c
let uniqueNumber = (array) => (
    array.filter((currentValue, index, arr) =>(
      arr.indexOf(currentValue) === index
    ))
);

//1.d
result = numbers.reduce((total, current) => total + current, 0);
console.log(result);

//1.e
let lessHundred = numbers.filter(function(item){
    return item <100;
});
console.log(lessHundred);

//1.f

let greaterFifty = numbers.filter(function(item){
    return item > 50;
});
console.log(greaterFifty);

//1.g
<<<<<<< HEAD
let dividedNum = numbers.filter(number => number % 2 === 0);
console.log(dividedNum);


//1.i
 let dividedThreeNum = numbers.filter(number => number % 3 === 0);
 console.log(dividedThreeNum);

 //1.j
 let countElements = numbers.length;
    console.log(countElements);

    //1.k
    let reversedNum = numbers.slice().reverse();
    console.log(reversedNum);

=======
let divisor = 2;
function divisibleTwo(array, divisor){
    return array.filter( number => number % divisor === 0);
} 
let dividedNum = divisibleTwo(numbers, divisor);
console.log(dividedNum);

//1.h
let divideThree = 3;
function divisibleThree(array, divideThree){
    return array.filter( number => number % divisor === 0);
} 
let dividedThreeNum = divisibleTwo(numbers, divideThree);
console.log(dividedThreeNum);

//1.i
function twoOrThree(array) {
    return array.filter(number => number % 2 !== 0 && number % 3 !== 0);
}

let finalResult = twoOrThree(numbers);
console.log(finalResult);

//1.j
let countElements = numbers.length;
console.log( countElements);

//1.k
let reversedNum = numbers.slice().reverse();
console.log( reversedNum);

//2.a

let mixedArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
let numbersOnly = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        numbersOnly.push(mixedArray[i]);
    }
}

console.log("Numbers Only:", numbersOnly);

//2.b
let stringsOnly = [];
let i = 0;

while (i < mixedArray.length) {
    if (typeof mixedArray[i] === 'string') {
        stringsOnly.push(mixedArray[i]);
    }
    i++;
}

console.log("Strings Only:", stringsOnly);

//2.c
>>>>>>> 244bf0d204b64886a3ba010e11058fbaa9cf0dd0

//2.a
let mixedArray = [7, 10, "Clentan", 13, 89, true, 45, false, "Jerry", "Vukona", "Reabetswe", 600];
let numbersOnly = [];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === 'number') {
        numbersOnly.push(mixedArray[i]);
    }
}

console.log("Numbers Only:", numbersOnly);

//2.b
let stringsOnly = [];
let i = 0;

while (i < mixedArray.length) {
    if (typeof mixedArray[i] === 'string') {
        stringsOnly.push(mixedArray[i]);
    }
    i++;
}

console.log("Strings Only:", stringsOnly);

//2.c
let sum = 0;
let j = 0;

do {
    if (typeof mixedArray[j] === 'number') {
        sum += mixedArray[j];
    }
    j++;
} while (j < mixedArray.length);

console.log("Sum of numbers:", sum);

//2.d
let greeting = "Hello";
let stringElements = mixedArray.filter(item => typeof item === 'string');

for (let k = 0; k < stringElements.length; k++) {
    if (k === stringElements.length - 1) {
        greeting += `, and ${stringElements[k]}.`;
    } else if (k === stringElements.length - 2) {
        greeting += `, ${stringElements[k]}`;
    } else {
        greeting += `, ${stringElements[k]}`;
    }
}

console.log(greeting);

//2.e
let noStrings = mixedArray.filter(item => typeof item !== 'string');
console.log("Without strings:", noStrings);