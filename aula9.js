const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let frutas = ["maçã", "banana", "laranja", "uva"];
frutas.pop("uva");
frutas.unshift("morango");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}