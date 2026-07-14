const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual é a sua idade? ", function (idade) {
        rl.question("Tem carteira de motorista? (sim/não) ", function (carteira) {

            console.log("\n--- DADOS ---");
            console.log("Nome:", nome);
            console.log("Idade:", idade);
            if (Number(idade) >= 18 && carteira == "sim") {
                console.log(nome + " pode dirigir");
            } else {
                console.log(nome + " não pode dirigir");
            }
            rl.close();
        });
    });
});