let frutas = ["Maçã", "Banana", "Uva", "Laranja"];
let frutaEncontrada = frutas.find(function(fruta){
    return fruta === "Uva";
});
console.log(frutaEncontrada);
////Pessoas
let pessoas = [
    { nome: "Thiago", idade: 20},
    { nome: "Maria", idade: 18},
    { nome: "Carlos", idade: 16}
];
let pessoa = pessoas.find(function(pessoa){
    return pessoa.nome === "Carlos";
});
console.log(pessoa);