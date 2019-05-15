let str = "HEllo my - - - // //  ) world"
let arr = str.split(' ');
let newAr = []
/* arr.forEach(function(elem, index, arr){
    if(elem != ''){
        newAr.push(elem)
    }
    return newAr
})
console.log(newAr) */

let filterArr = arr.filter((elem)=>{
    if(elem == ''){
        return false
    }    
    return elem
})
console.log('-----------------------')
console.log(filterArr)

// set 

let defArray = [1, 2, 3, 1, 4, 6, 6, 6, 3 , 54, 2]
let setArr = new Set()
defArray.forEach((el)=>{
    setArr.add(el)
})
console.log(setArr)