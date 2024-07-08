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