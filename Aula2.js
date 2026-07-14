const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function (nome) {
    rl.question("Qual é a sua idade? ", function (idade) {
        rl.question("Qual é a sua cidade? ", function (cidade) {
            rl.question("Qual é o seu curso? ", function (curso) {

                console.log("\n--- DADOS ---");
                console.log("Nome:", nome);
                console.log("Idade:", idade);
                console.log("Cidade:", cidade);
                console.log("Curso:", curso);

                rl.close();
            });
        });
    });
});