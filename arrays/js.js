'use strict';

let arr = ["first",2,3,"four",6];
console.log(arr);
arr.pop(); //delete last elem form arr
console.log(arr)
arr.push("7"); //add elem to the end of arr
console.log(arr);
arr.shift();
console.log(arr); //delete first elem from arr
arr.unshift("first"); // add elem to the first arr
console.log(arr);

console.log("----------------------------------");
/*arr[90] = 99;
console.log(arr);
console.log(arr.length) //return 91, but we have only 6 elem in array. Length return always the last elem + 1*/
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function (item, i, mass) {
    console.log(i + ": " + item + " (array: " + mass + " )");
});

console.log("-----------------------------------------------")
let mass = [1,3,4,6,7];

//to get index of elems in array use loop with "in"
for (let key in mass){
    console.log(key)
}
console.log("-----------------------------------------------")

//to get value from arr use loop with "of"
for (let key of mass){
    console.log(key)
}
console.log("-----------------------------------------------")

/////////////SPLIT

/*let answer = prompt("", "");
let newArr = [];

newArr = answer.split(',');
console.log(newArr);

console.log("-----------------------------------------------")*/


/*//join

let arrr = ['aawe','azz', 'fdfdfdfdf'],
i = arrr.join(', ');
console.log(i)*/

/*//sort by symbol (strings only)
let arrr = ['aawe','fdfdfdfdf', 'ddddc'];
console.log(arrr.sort());*/

//sort for number better to use such as:
let arrNum = [4,1,11,15,2,12,3,31],
    sort = arrNum.sort(compareNum);
function compareNum(a,b){
    return (a-b);
}
console.log(sort);


class Student {
    constructor(gpa) {
        this.gpa = gpa+"";
        this.stringGPA = function() {
            return this.gpa.toString();
        }
    }
   /* stringGPA(){
        return this.gpa;
    }*/

}
const student = new Student(4);
console.log(typeof student.stringGPA())
// console.log(typeof student.stringGPA())
