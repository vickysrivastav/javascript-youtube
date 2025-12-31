// singleton

//object literals

//symbole
const mySym = Symbol ("key1");

const JsUser = {
    name: "vicky",
    "full name": "vicky srivastav",
    [mySym]: "mykey1",
    age: 20,
    location: "bareilly",
    email: "vicky0shrivaatav@gmail.com",
    isLoggedIn: false,
    LastLogindays: [ "monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "vicky@639620gmail.com";
// Object.freeze(JsUser);
JsUser.email = "vicky@427351gamilcom";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS  User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





