let soldier = {
    health: 400,
    armor: 1300
}

let john = {
    health: 200
};

john.__proto__= soldier;
console.log(john);
console.log(john.armor);

console.log("---------------------------")

const goods = {
    color: "green",
    kind: "fruit"
};
const cucumber = {
    kind: "vegetable"
};
cucumber.__proto__ = goods;
console.log(cucumber.color);p