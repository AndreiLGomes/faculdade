//1
const cidades: string[] = ["São Paulo", "Rio de Janeiro", "Curitiba", "Salvador", "Belo Horizonte"];
console.log("A terceira cidade é:", cidades[2]);
//2
// Array inicial
const numeros: number[] = [10, 20, 30, 40, 50];
// Adiciona o número 35 entre 30 e 40
numeros.splice(3, 0, 35); // Insere 35 na posição 3
// Remove o número 20 do array
const index = numeros.indexOf(20);
if (index !== -1) {
    numeros.splice(index, 1);
}
console.log("Array final:", numeros);
//3
// Array inicial
const numero: number[] = [1, 2, 3, 4, 5];
// Usando .map() para criar um novo array com cada número multiplicado por 3
const multiplicadoPorTres = numero.map(num => num * 3);
console.log("Novo array:", multiplicadoPorTres);
//4
// Array original
const numeros2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Usando .filter() para criar um novo array com apenas números ímpares
const numerosImpares = numeros2.filter(num => num % 2 !== 0);
console.log("Números ímpares:", numerosImpares);
//5
// Array de números
const numeros3: number[] = [5, 7, 10, 12, 15];
// Usando .reduce() para calcular a soma total
const somaTotal = numeros3.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log("Soma total:", somaTotal);


