const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual é a sua idade? ", function (idade) {
    
        console.log("\n--- DADOS ---");
        console.log("Nome:", nome);
        if (Number(idade) < 18) {
            console.log("Idade:", idade, "- Menor de idade");
        } else {
            console.log("Idade:", idade, "- Maior de idade");
        }
        rl.close();
    });
});