//1
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => a / b;

console.log(soma(5, 3));         // 8
console.log(subtracao(10, 4));   // 6
console.log(multiplicacao(6, 2)); // 12
console.log(divisao(9, 3));      // 3
//2
const saudacao = nome => `Olá, ${nome}! Seja bem-vindo!`;

console.log(saudacao('Maria')); // "Olá, Maria! Seja bem-vindo!"
//3
let contador = 0;
const incrementar = () => {
    console.log(contador);
    contador++;
    if (contador === 10) { // Para o intervalo quando o contador atingir 10
        clearInterval(intervalo);
    }
};

let intervalo = setInterval(incrementar, 1000); // A cada segundo, imprime e incrementa o valor de contador

//4
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(num => num % 2 === 0);

console.log(pares); // [2, 4, 6, 8, 10]
//5
const converterParaFahrenheit = celsius => (celsius * 9/5) + 32;

console.log(converterParaFahrenheit(25)); // 77
//6
const strings = ['banana', 'maçã', 'laranja', 'uva'];
const ordenado = strings.sort((a, b) => a.localeCompare(b));

console.log(ordenado); // ['banana', 'laranja', 'maçã', 'uva']
