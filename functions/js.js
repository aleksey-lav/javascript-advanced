function sum(a,b) {
    return (a+b);
}
console.log(sum(2,5));

console.log("----------------------------")

let example = function (sum) {
    return console.log(sum)
};

example("Joy");
console.log("----------------------------")

const multiply = (a1, a2) => a1*a2;
console.log(multiply(2,3));
console.log("-----------------------------")

const number = "12";
console.log(typeof(number)); //здесь строка
const newNumber = +number;
console.log(typeof(newNumber) + "\n"); //здесь число

const num1 = "12314";
console.log(typeof num1);
let num2 = parseInt(num1);
console.log(typeof num2)
console.log("-----------------------------")
