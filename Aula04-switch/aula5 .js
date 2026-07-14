const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=====menu=====");
console.log("1 - Futebol");
console.log("2 - Basquete");
console.log("3 - volei");
console.log("4 - sair");

rl.question("Escolha uma opção: ", function (opcao) {
switch (Number(opcao)) {
    case 1:
        console.log("Você escolheu Futebol");
        break;
    case 2:
        console.log("Você escolheu Basquete");
        break;
    case 3:
        console.log("Você escolheu Volei");
        break;
    case 4:
        console.log("Você escolheu sair");
        break;

    default:
        console.log("Opção inválida");
        break;
}

 rl.close();
});