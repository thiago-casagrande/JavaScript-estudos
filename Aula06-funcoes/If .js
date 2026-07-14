const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function maiornumero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let resultado = maiornumero(10, 5);
console.log("O maior número é:", resultado);