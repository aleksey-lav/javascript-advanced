
// ES 5
/* function Animal(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}
function Dog(name) {
    Animal.call(this,name)
    this.bark = function () {
        return ('Dog '+this.name+' is barking')
    }
}
Dog.prototype = Object.create(Animal.prototype);

var dog = new Dog('Aban');
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking'); */

/*//Palindrome
function checkPalindrome(inputString) {
    const strLength = inputString.length

    for(let i = 0; i < strLength; i += 2){
        if(inputString[i] !== inputString[strLength-i-1]){
            return false
        }
    }
    return true
}
checkPalindrome("99199");*/

//Max multiplication of two adjacent numbers in massive
/*function adjacentElementsProduct(inputArray) {
    var arr = inputArray,
        curentNumber =0,
        nextNumber = 0,
        maxMultiply = 0;
    for(let i=0; i< arr.length; i++){
        curentNumber = arr[i];
        nextNumber = arr[i+1];
        if(curentNumber * nextNumber > maxMultiply){
            maxMultiply = curentNumber*nextNumber;
        };
    };
    return maxMultiply;
};
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));*/





/*
var dog = new Dog ('Aban');

dog.getName () === 'Aban'; // true

dog.bark () === 'Dog Aban is barking'; // true
*/

//ES 6

class Animal  {
    constructor(name){
        this.name = name;
    }
    getName(){
        return (`Hello ${this.name}`)
    }
}
class Dog1 extends Animal{
    bark(){
        return (`Dog ${this.name} is barking`)
    }
}
let dog = new Dog1('Aban');
console.log(dog.getName())
console.log(dog.bark())


//how to write and create new file with node js //sync
var fs = require('fs')
var mess = "hello, world"
fs.writeFileSync('test.txt', mess)

 
let a = [1,2,4,5,3,2,3,]
let St = new Set(a)
console.log(St)