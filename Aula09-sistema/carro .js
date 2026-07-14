const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

carro.ano = 2025;

console.log(carro.ano);