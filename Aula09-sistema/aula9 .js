const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}); 

let pessoa = {
    nome: "Thiago",
    idade: 25,
    cidade: "São Paulo",
    curso: "JavaScript"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);
console.log(pessoa.curso);