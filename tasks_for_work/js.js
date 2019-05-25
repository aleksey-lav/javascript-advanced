/*
Есть массив строк [" string_first   ", "string_seCOnd_nOt_CAMELCASE", "    third_STRiNG"]
Нужно превратить его в массив строк, где каждая строка представлена в виде camelCase без лишних пробелов вначале и в конце: ["stringFirst", "stringSecondNotCamelCase", "thirdString"]

*/



let arrStr = [" string_first   ", "string_seCOnd_nOt_CAMELCASE", "    third_STRiNG"]
console.log(`arrStr is array - ${arrStr}`)
let newArrStr = arrStr.join(",").toLowerCase().split("_").map((el,index)=>{
    if(!index==0){
        let temp = el.split('').map((elem, count)=>{
            return count == 0 ? elem[count].toUpperCase(): elem.trim()
        }).join('')
        return temp
    }else{
       return el.trim()
    } 
}).join('').split(',')

console.log(`newArrStr is ${newArrStr
}`)
console.log(`newArrStr is ${typeof newArrStr}`)


/*
Есть строка "aaabbccccdeff"
Написать функцию, которая принимает на вход эту строку, и возвращает коллекцию с указанием каждого символа и количеством, сколько раз этот символ встречается в строке:
*/

let stR = "aaabbbsssdddrreeeeeeeffgpppppppppp"
const f = (stR) => {
stR = stR.toLowerCase().split("")
    let objMap = new Map();
    let count = 1
    stR.map((el)=>{
            objMap.has(el) ? objMap.set(el, count) : objMap.set(el, count=1);
            count++;
        });
    return objMap;
}
console.log(f(stR));