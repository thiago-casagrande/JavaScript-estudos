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
    console.log("3 - Buscar Alunos");
    console.log("4 - Mostrar alunos Aprovados");
    console.log("5 - Editar aluno");
    console.log("6 - Remover aluno");
    console.log("7 - Sair");

    rl.question("Escolha uma opção: ", function (opcao) {
        switch (Number(opcao)) {
            case 1:
                cadastrarAluno();
                break;
            case 2:
                listarAlunos();
                break;
            case 3:
                buscarAluno();
                break;
            case 4:
                mostrarAprovados();
                break;
            case 5:
                editarAluno();
                break;
            case 6:
                removerAluno();
                break;
            case 7:
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
function buscarAluno() {
    rl.question("Digite o nome do aluno: ", function(nome) {

        let aluno = alunos.find(function(aluno) {
            return aluno.nome === nome;
        });

        if (aluno) {
            console.log("\n=== ALUNO ENCONTRADO ===");
            console.log("Nome:", aluno.nome);
            console.log("Nota 1:", aluno.nota1);
            console.log("Nota 2:", aluno.nota2);

            let media = (aluno.nota1 + aluno.nota2) / 2;
            console.log("Média:", media);

            if (media >= 7) {
                console.log("Situação: Aprovado");
            } else {
                console.log("Situação: Reprovado");
            }

        } else {
            console.log("Aluno não encontrado.");
        }

        mostrarMenu();
    });
}
function mostrarAprovados() {

    let aprovados = alunos.filter(function(aluno) {

        let media = (aluno.nota1 + aluno.nota2) / 2;

        return media >= 7;

    });

    console.log("\n=== ALUNOS APROVADOS ===");

    if (aprovados.length === 0) {
        console.log("Nenhum aluno aprovado.");
    }else {
        aprovados.forEach(function(aluno) {
            console.log(aluno.nome);
        });
        }
    mostrarMenu();
}
function editarAluno() {
    rl.question("Nome do aluno: ", function(nome) {

        let indice = alunos.findIndex(function(aluno) {
            return aluno.nome === nome;
        });

        if (indice === -1) {
            console.log("Aluno não encontrado.");
            mostrarMenu();
            return;
        }

        rl.question("Nova Nota 1: ", function(nota1) {
            rl.question("Nova nota 2: ", function(nota2) {

                alunos[indice].nota1 = Number(nota1);
                alunos[indice].nota2 = Number(nota2);
            
                console.log("Aluno editado com sucesso!");
                mostrarMenu();

            });
        });
    });
}
function removerAluno() {
    rl.question("Qual aluno deseja remover: ", function(nome) {
        
        let indice = alunos.findIndex(function(nome) {
            return aluno.nome === nome;
        });
        if (indice, 1) {
            console.log("Aluno não encontrado.");
            return
            mostrarMenu();
        }

        alunos.splice(indice, 1);

        console.log("Aluno removido com sucesso");
        mostrarMenu();
    });
}
    mostrarMenu();