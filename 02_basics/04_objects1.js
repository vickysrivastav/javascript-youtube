// const tinderUser = new Object();
// const tinderUser = {};

// tinderUser.id = '123@sbd';
// tinderUser.name = "sammy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);
const regularuser = {
    email : "vicky@123gmail.com",
    fullname : {
        userfullname : {
            firstname : "vicky",
            lastname : "srivastav",
        }
    }
}
// console.log(regularuser.fullname.userfullname.lastname);
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {2: "a", 3: "b"};

// const Obj3 = {...Obj1, ... Obj2};
const obj3 = Object.assign({}, Obj1, Obj2);
console.log(obj3);
