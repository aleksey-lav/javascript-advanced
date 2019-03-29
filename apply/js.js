
function sum(x,y){
    return x + y;
}
var res = sum.apply(null, [3,8]);
console.log(res);
console.log("hello")

///dynamic calculate arguments

function sum(){
    for(var i = 0, res = 0; i < arguments.length; res += arguments[i++]){
    }
    return res;
}
var test = [1,2,3,4,5]
console.log(sum.apply(null, test))

////
Math.max(a,b,c)

var arr = [];
arr.push(1);
arr.push(5);
arr.push(55);
arr.push(0);
arr.push(71);
console.log(Math.max.apply(null, arr))
