const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(8, 6);

console.log("Resultado:", resultado);