let numeros = [10, 15, 22, 31, 40, 55];
let maisde20 = numeros.filter(function(numero){
    return numero > 20;
});
console.log(maisde20);
//// Idades
let idades = [12, 15, 18, 22, 30]
let maioresDeidade = idades.filter(function(idade){
    return idade >= 18;
});
console.log(maioresDeidade);