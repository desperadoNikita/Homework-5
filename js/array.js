const fruits = ["apricots", "figs", "kiwi", "apples", "mango"];
fruits.shift();
fruits.unshift("persimmon")
fruits.pop();
fruits.push("pomelo")

console.log('fruits :>> ', fruits);

fruits.splice(2, 1, "orange", "pitaya", "grape");
const message = ["A", "love", "JS"];

console.log('message :>> ', message.join(" "));
