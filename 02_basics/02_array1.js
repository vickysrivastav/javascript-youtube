const marvel_heros = ["spiderman", "ironman", "thor"] 
const dc_heros = ["batman","superman", "flash"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const Allheros = marvel_heros.concat(dc_heros);
// console.log(Allheros);

const All_New_Heros = [...marvel_heros, ...dc_heros, ];

// console.log(All_New_Heros);

const another_array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("vicky"));
console.log(Array.from("vicky"));
console.log(Array.from({name: "vicky"})); //Intersting usecase

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));