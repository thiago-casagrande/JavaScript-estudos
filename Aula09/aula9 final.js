const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let nomes = ["Thiago", "Maria", "João", "Ana", "Carlos"];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

nomes.shift(); // Remove o primeiro elemento do array
console.log("\nDepois de remover o primeiro elemento:");
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}