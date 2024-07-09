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


const developers = [{
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//3.a
let names = developers.map(developer => developer.name);
console.log(names);

//3.b
let numPhones = developers.map(developer => ({
  totalPhones: developer.phones.length
}));
console.log(numPhones);

//3.c
/*let compSet = developers.map(computerSetups);*/


//3.d
/* let trustedPhone = developers.phones;
console.log(trustedphones);*/

//3.e


//3.f
let devsNoPhone = developers.filter(developer => developer.phones.length === 0  );
console.log(devsNoPhone);

//3.g
let devsNoPc = developers.filter(developer => developer.laptops.length === 0  );
console.log(devsNoPc);

//3.h
let devsNoSetup = developers.filter(developer => developer.computerSetups.length === 0  );
console.log(devsNoSetup);

//3.i
let mostGadge = developers.filter(developer => 
  developer.phones.length > 0 && 
  developer.computerSetups.length > 0 && 
  developer.laptops.length > 0
);

console.log(mostGadge);

console.log(developers[0]);