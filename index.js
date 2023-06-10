let arr = [4, 16, 19, 22, 11, 144, 1967, 19124];

let even = [];
let odd = [];

let evenn = arr.filter(val => {
    return val % 2 === 0;
});
console.log(evenn);

let add = arr.filter(val => {
    return val % 2 === 1;
});
console.log(add);

// ht2

let a = [`jafar`, `dilik`, `emin`, `azizjon`]

let  longestName = ""

a.filter(item => {
    if(item.length > longestName.length) {
        longestName = item
    }
}) 
console.log(longestName);

