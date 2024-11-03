//1
var cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Belo Horizonte"];
console.log("A terceira cidade é:", cidades[2]);
//2
// Array inicial
var numeros = [10, 20, 30, 40, 50];
// Adiciona o número 35 entre 30 e 40
numeros.splice(3, 0, 35); // Insere 35 na posição 3
// Remove o número 20 do array
var index = numeros.indexOf(20);
if (index !== -1) {
    numeros.splice(index, 1);
}
console.log("Array final:", numeros);
//3
// Array inicial
var numero = [1, 2, 3, 4, 5];
// Usando .map() para criar um novo array com cada número multiplicado por 3
var multiplicadoPorTres = numero.map(function (num) { return num * 3; });
console.log("Novo array:", multiplicadoPorTres);
//4
// Array original
var numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Usando .filter() para criar um novo array com apenas números ímpares
var numerosImpares = numeros2.filter(function (num) { return num % 2 !== 0; });
console.log("Números ímpares:", numerosImpares);
//5
// Array de números
var numeros3 = [5, 7, 10, 12, 15];
// Usando .reduce() para calcular a soma total
var somaTotal = numeros3.reduce(function (acumulador, valorAtual) { return acumulador + valorAtual; }, 0);
console.log("Soma total:", somaTotal);
