//1
// Função que concatena nome e sobrenome
function concatenaNomes(nome, sobrenome) {
    return "".concat(nome, " ").concat(sobrenome);
}
var nomeCompleto = concatenaNomes("João", "Silva");
console.log("Nome completo:", nomeCompleto);
//2
// Função soma como uma arrow function
var soma = function (a, b) { return a + b; };
var resultado = soma(5, 10);
console.log("Resultado da soma:", resultado);
//3
// Função saudacao com parâmetro opcional titulo
function saudacao(nome, titulo) {
    if (titulo) {
        return "Ol\u00E1, ".concat(titulo, " ").concat(nome, "!");
    }
    else {
        return "Ol\u00E1, ".concat(nome, "!");
    }
}
console.log(saudacao("João")); // Sem título
console.log(saudacao("João", "Dr.")); // Com título
// Implementação da função ajustar
function ajustar(valor) {
    if (typeof valor === "number") {
        return valor + 10; // Se for um número, adiciona 10
    }
    // Aqui, sabemos que o valor é uma string, então não precisamos de mais verificações
    return valor.toUpperCase(); // Se for uma string, retorna em maiúsculas
}
// Exemplos de uso da função
console.log(ajustar(20)); // Resultado esperado: 30
console.log(ajustar("Olá TypeScript!")); // Resultado esperado: "OLÁ TYPESCRIPT!"
//5
// Função incrementa com valor de incremento padrão
function incrementa(numero, incremento) {
    if (incremento === void 0) { incremento = 1; }
    return numero + incremento;
}
console.log(incrementa(5)); // Resultado esperado: 6 (incremento padrão de 1)
console.log(incrementa(5, 3)); // Resultado esperado: 8 (incremento fornecido: 3)
