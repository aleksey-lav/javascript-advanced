const e = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByTagName('button'),
    heart = document.querySelectorAll('.heart'),
    wrapper = document.querySelector('.wrapper');

console.log(e);

but1.onclick = function () {
   return e.style.backgroundColor = "red";
};
but2.onclick = function () {
    return e.style.backgroundColor = "green";
};
but3.onclick = function () {
    return e.style.backgroundColor = "black";
};

console.log(heart);
heart.forEach(function (item, i, heartArray) {
   item.style.backgroundColor = 'yellow';
});

//create element
let div = document.createElement('div'),
    text = document.createTextNode('Here I am');

div.classList.add('black');

div.innerHTML = '<h1>Hello world!</h1>' //no protect because user can send bad script

div.textContent = 'Hello world, man!'; //it's protect to use

// document.body.appendChild(div); //insert element to the and of body
// wrapper.appendChild(div); //insert element to end of parent wrapper
document.body.insertBefore(div, wrapper); //insert element into ahead parent element
wrapper.removeChild(heart[0]);


console.log(div);