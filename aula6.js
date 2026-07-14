const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contador = 2;

while (contador <= 20) {
    console.log(contador);
    contador += 2;
}