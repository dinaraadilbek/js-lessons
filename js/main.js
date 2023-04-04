// let num = 90;
// if (num < 12) {
//     console.log("Больше");
// } else if(num > 100) {
//     console.log("Меньше");
// } else {
//     console.log(90);
// }

// const num = 50;
// (num === 50) ? (console.log("Ok")) : (console.log("Error"));

let num = 30;
switch (num) {
    case 32:
        console.log('Error');
        break;
    case 40:
        console.log('Меньше');
        break;
    case 30:
        console.log('Правильно!')
        break;
}

let a = "I go to school";
switch (a) {
    case "I went at school":
        console.log("Nope");
        break;
    case "I am from China":
        console.log("Nope");
        break;
    case "I go school":
        console.log("OK!");
        break;
        default:
            console.log("Не в этот раз");
            break;
}

const audi = true;
const bmv = false;

if (audi || bmv) {
    console.log('AUDI');
}


let dinaReport, aliReport, annaReport = "done";
console.log(dinaReport || aliReport || annaReport);

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
console.log(hamburger ===3 && (cola == 2 || fries == 3) && nuggets);