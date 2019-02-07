// 'use strict';

let box = document.querySelector('.box'),
     btn = document.querySelector('.btn');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);

// document.documentElement.scrollTop = 0;

btn.addEventListener('click', function () {
    // box.style.height = box.scrollHeight + 'px';
    // console.log(box.scrollTop);
    box.scrollTop = 0;

});


// scrollBy(0,200);
// scrollTo(0, 200);