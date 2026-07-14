const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let aluno = {
    nome: "Thiago",
    nota1: 8,
    nota2: 6
};

calcularMedia(aluno.nota1, aluno.nota2);

function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media >= 7) {
        console.log(`A média de ${aluno.nome} é: ${media}. Parabéns, você foi aprovado!`);
    } else {
        console.log(`A média de ${aluno.nome} é: ${media}. Infelizmente, você foi reprovado.`);
    }
}