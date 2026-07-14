const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
for (let contador = 2; contador <= 20; contador += 2) {
    console.log(contador);
}