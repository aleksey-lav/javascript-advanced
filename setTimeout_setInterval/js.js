/*
let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId);//to stop timeout
*/

/*let timerId = setInterval(sayHello, 3000);


function sayHello() {
    console.log('Hello World');
};*/



///recursive setTimeout
/*
 let timerId = setTimeout(function log(){
     console.log("hello")
     setTimeout(log, 2000);
 })*/

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0;

    let id = setInterval(frame, 10);
    function frame() {
        if(pos == 300){
            clearInterval(id);
        }
        else{
            console.log(pos);
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.first')){
        console.log("hello");
    }
});
