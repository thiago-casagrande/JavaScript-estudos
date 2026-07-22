const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let numeros = [5, 8, 10, 15, 20];
numeros.forEach(function(numero){
    console.log("Numero: " + numero);
})