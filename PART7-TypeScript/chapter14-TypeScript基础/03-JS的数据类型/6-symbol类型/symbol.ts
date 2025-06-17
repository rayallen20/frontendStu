const s1: symbol = Symbol("identify");
const s2 = Symbol("identify");

const person = {
    [s1]: "developer",
    [s2]: "designer",
}

console.log(person);