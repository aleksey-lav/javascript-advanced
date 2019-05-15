/* function mul(a,b){
    return a*b
} */
//double
// var double = mul.bind(null, 2)
// console.log(double(2))
// console.log(double(3))
// console.log(double(4))

//triple
/* var double = mul.bind(null, 3)
console.log(double(2))
console.log(double(3))
console.log(double(4))

console.log("-----------------------") */


//////curryng
'use strict'
const films = [
    {year: 1994, title: 'The Game of Thrones', data: {running : 82}},
    {year: 1998,title: 'Batman', data: {running : 60}},
    {year: 1982,title: 'Fantomas', data: {running : 32}},
    {year: 2005,title: 'War of worlds', data: {running : 104}}
]
function createSort(property){
    console.log('hello')
    return function compareStrings (a,b){
        return a[property] > b[property]
    }
}
function getProperty(handle){
    return function(object){
        return handle(a) > handle(b)
    }
}
const   
        getTitle = getProperty('title'),
        getYear = getProperty('year'),
        sortByTitle = createSort(getTitle),
        sortByYear = createSort(getYear)


/* 
films.sort(sortByTitle)
console.table(films + '\n') */
films.sort(sortByTitle)
console.table(films)
console.log("------")
const add = a => b => a + b
console.log( add(1)(3))

