const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual é a sua idade? ", function (idade) {
        
        console.log("\n--- DADOS ---");
        if (Number(idade) < 16) {
            console.log("Não pode votar");
        } else if (Number(idade) >= 16 && Number(idade) < 18) {
            console.log("Voto facultativo");
        } else if (Number(idade) >= 18 && Number(idade) < 70) {
            console.log("Voto obrigatório");
        } else {
            console.log("Voto facultativo");
        }
        rl.close();
    });
});