const name = "vicky";
const repoCount = 50;

// console.log(name + repoCount + " vlaues");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vicky-hc-com');
// console.log(gameName [3]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-5, 0);
console.log(anotherString);


const newString1 = "      vicky       ";
console.log(newString1);
console.log(newString1.trim());


const url = "https://vicky.com/vicky@32-srivastav";

console.log(url.replace('@32', '%'));

console.log(url.includes('vicky'))

console.log(gameName.split('-'));



