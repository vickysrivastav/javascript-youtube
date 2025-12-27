//primitive

// 7 types : String, Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 1212345434676786n;




//Reference (Non-Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "vicky",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log(typeof scoreValue);


//***********************************memory************************ */

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = 'vickysrivastav.com'

let anothername = myYoutubename;
anothername = "chai our code"
console.log(anothername);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "vickysrivastav@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);





