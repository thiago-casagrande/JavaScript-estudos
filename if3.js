const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual é a sua nota? ", function (nota) {

        console.log("\n--- DADOS ---");
        console.log("Nome:", nome);
        if (Number(nota) >= 7) {
            console.log(nome + " foi aprovado");
        } else {
            console.log(nome + " foi reprovado");
        }
        rl.close();
    });
});