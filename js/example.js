const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];
fruits.pop();
fruits.push("pomelo")
fruits.shift();
fruits.unshift("persimmon")

console.log('fruits :>> ', fruits);

fruits.splice(3, 1, "orange", "pitaya", "grape");
const message = ["A", "love", "JS"];

console.log('message :>> ', message.join(" "));