/*//es 5
let video = ['youtube', 'vimeo', 'slack'],
    blogs = ['wordpress', 'livejournal', ' blogger'],
    internet = [video, blogs, 'vk', 'facebook'];

console.log(internet.toString());*/




//es6 spread

let video = ['youtube', 'vimeo', 'slack'],
    blogs = ['wordpress', 'livejournal', ' blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c+a+b);
}
let numbers = [2,5,7];
log(...numbers);