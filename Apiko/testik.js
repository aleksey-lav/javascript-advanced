const add = a => b => {
    console.log(a , b)
    return a+b
}

console.log(add(3)(2))

function sum (a){
    console.log(a)
    console.log(arguments)
    return function(b){
        console.log(a)
        console.log(b)
        return a+b
    }
}
console.log(sum(4)(22))

const films = ['The game of thrones', 'Batman', 'Marvel', 'Hatiko']
films.sort();
console.log(films)
console.log('--------------------')
console.table(films)
