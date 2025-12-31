//Dates


let MyDate = new Date();
// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleTimeString());
// console.log(typeof MyDate);

// let mycreatedDate = new Date(2020, 0, 23);
// let mycreatedDate = new Date(2020, 0, 23, 5, 3);
// let mycreatedDate = new Date("2023-01-14");

let mycreatedDate = new Date("01-14-2023");
// console.log(mycreatedDate);
// console.log(mycreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mycreatedDate.getTime());

let newDate = new Date();
 console.log(newDate);
 console.log(newDate.getMonth() + 1);
 console.log(newDate.getDay());
 console.log(newDate.getFullYear());

 console.log(newDate.toLocaleString('HI-IN', {
    weekday: 'long',

 })
);
 
 

 