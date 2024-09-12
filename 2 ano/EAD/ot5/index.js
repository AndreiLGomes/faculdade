// 1. Função que Calcula a Área de um Retângulo: Crie uma função que
// calcula a área de um retângulo dado largura e altura
function areaRetangulo(num1, num2){
    return num1*num2;
}
let resultado = areaRetangulo(3, 3)
console.log(resultado);
//2. Função para Verificar Número Par: Faça uma função que recebe um
// número e retorna true se for par e false se for ímpar
function verificarNumero(num){
    if(num% 2 === 0){
        nu = true;
        return nu;
    }else{
        nu = false;
        return nu
    }    
}
let verificar = verificarNumero(10);
console.log(verificar)
//3. Converter Polegadas em Centímetros: Escreva uma função que
// converte polegadas em centímetros.
converterCentimentros = (medida) => medida * 2.54;
console.log(converterCentimentros(3))
//5. Maiúsculas para Minúsculas: Crie uma função que
// recebe uma string e
// retorna a mesma string em letras minúsculas.
function paraMinusculas(texto) {
    return texto.toLowerCase();
}
let resultado2 = paraMinusculas("StRing");
console.log(resultado2);
// 6.Crie uma arrow function chamada multiplicaPorDez que recebe um
// número como parâmetro e retorna o valor multiplicado por 10.
const multiplicaPorDez = (num) => num * 10;
console.log(multiplicaPorDez(5));
// 4. IMC: Escreva uma função que calcula o Índice de Massa Corporal (IMC).
function calculaIMC(peso, altura) {
    return peso / (altura * altura);
}
let peso = 70; 
let altura = 1.75;

let imc = calculaIMC(peso, altura);
console.log(`O IMC é: ${imc.toFixed(2)}`);