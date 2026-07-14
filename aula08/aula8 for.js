const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 
let carros = ["gol", "civic", "corolla"];

carros.push("Bmw", "Fusca");
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}