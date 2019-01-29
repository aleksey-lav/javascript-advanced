const e = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByTagName('button'),
    heart = document.querySelectorAll('.heart');

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