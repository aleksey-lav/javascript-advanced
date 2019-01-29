let options = {
    width: 1024,
    height: 1024,
    name: "hello"
};
console.log(options.width);
console.log("----------------------------------")
options.bool = false;
options.colors = {
    border: "black",
    bg: "black"

};
console.log(options);
console.log("----------------------------------")
delete options.bool;
console.log(options);

for (let key in options){
    console.log("Option " + key + " have value " + options[key]);
}
console.log(Object.keys(options).length);