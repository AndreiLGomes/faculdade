//1
// Função que concatena nome e sobrenome
function concatenaNomes(nome: string, sobrenome: string): string {
    return `${nome} ${sobrenome}`;
}
const nomeCompleto = concatenaNomes("João", "Silva");
console.log("Nome completo:", nomeCompleto);
//2
// Função soma como uma arrow function
const soma = (a: number, b: number): number => a + b;
const resultado = soma(5, 10);
console.log("Resultado da soma:", resultado);
//3
// Função saudacao com parâmetro opcional titulo
function saudacao(nome: string, titulo?: string): string {
    if (titulo) {
        return `Olá, ${titulo} ${nome}!`;
    } else {
        return `Olá, ${nome}!`;
    }
}
console.log(saudacao("João")); // Sem título
console.log(saudacao("João", "Dr.")); // Com título
//4
// Sobrecarga da função ajustar
function ajustar(valor: number): number;
function ajustar(valor: string): string;

// Implementação da função ajustar
function ajustar(valor: number | string): number | string {
    if (typeof valor === "number") {
        return valor + 10; // Se for um número, adiciona 10
    }
    // Aqui, sabemos que o valor é uma string, então não precisamos de mais verificações
    return valor.toUpperCase(); // Se for uma string, retorna em maiúsculas
}
// Exemplos de uso da função
console.log(ajustar(20)); 
console.log(ajustar("Olá TypeScript!")); 

//5
// Função incrementa com valor de incremento padrão
function incrementa(numero: number, incremento: number = 1): number {
    return numero + incremento;
}
console.log(incrementa(5)); // Resultado esperado: 6 (incremento padrão de 1)
console.log(incrementa(5, 3)); // Resultado esperado: 8 (incremento fornecido: 3)


