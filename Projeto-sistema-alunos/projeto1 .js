const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let alunos = [];

function mostrarMenu() {
    console.log("======= SISTEMA DE ALUNOS =======");
    console.log("1 - Cadastrar Aluno");
    console.log("2 - Listar Alunos");
    console.log("3 - Sair");

    rl.question("Escolha uma opção: ", function (opcao) {
        switch (Number(opcao)) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                listarAlunos();
                break;
            case 3:
                console.log("Até logo!");
                rl.close();
                break;

            default:
                console.log("Opção inválida");
                mostrarMenu();
                break;
        }
    });
}
function cadastrarAluno() {
    rl.question("Nome: ", function (nome) {
        rl.question("Nota 1: ", function (nota1) {
            rl.question("Nota 2: ", function (nota2) {
                 alunos.push({
                        nome: nome,
                        nota1: Number(nota1),
                        nota2: Number(nota2)
                    });
                    console.log("Aluno cadastrado com sucesso!");
                    mostrarMenu();
            });
        });
    });
}
function listarAlunos(){

    if (alunos.length === 0){
        console.log("\nNenhum aluno cadastrado.");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alunos.length; i++) {
        console.log("\n === ALUNO ===");
        console.log("Nome: ", alunos[i].nome);
        console.log("Nota 1:", alunos[i].nota1);
        console.log("Nota 2:", alunos[i].nota2);
        
        let media = (alunos[i].nota1 + alunos[i].nota2) / 2;
        console.log("Média: ", media);
    }
    mostrarMenu();
}
mostrarMenu();