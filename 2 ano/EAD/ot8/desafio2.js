// 1. Declare uma variável chamada isTruthy
let isTruthy = function (valor) {
  return Boolean(valor); // Retorna true ou false com base no valor passado
};
// Invoque a função passando todos os tipos de valores falsy
console.log(isTruthy(false)); // false
console.log(isTruthy(0)); // false
console.log(isTruthy("")); // false
console.log(isTruthy(null)); // false
console.log(isTruthy(undefined)); // false
console.log(isTruthy(NaN)); // false
console.log("------");
// Invoque a função passando 10 valores truthy
console.log(isTruthy(true)); // true
console.log(isTruthy(1)); // true
console.log(isTruthy("texto")); // true
console.log(isTruthy([])); // true
console.log(isTruthy({})); // true
console.log(isTruthy(Infinity)); // true
console.log(isTruthy(42)); // true
console.log(isTruthy(" ")); // true
console.log(isTruthy(new Date())); // true
console.log(isTruthy(() => {})); // true
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  placa: "ABC-1234",
  ano: 2020,
  cor: "preto",
  quantasPortas: 4,
  assentos: 5,
  quantidadePessoas: 0,

  mudarCor: function (novaCor) {
    this.cor = novaCor;
  },

  obterCor: function () {
    return this.cor;
  },
  obterModelo: function () {
    return this.modelo;
  },
  obterMarca: function () {
    return this.marca;
  },
  obterMarcaModelo: function () {
    return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
  },
  adicionarPessoas: function (numPessoas) {
    if (this.quantidadePessoas >= this.assentos) {
      return "O carro já está lotado!";
    }

    let lugaresDisponiveis = this.assentos - this.quantidadePessoas;

    if (numPessoas > lugaresDisponiveis) {
      return `Só cabem mais ${lugaresDisponiveis} ${
        lugaresDisponiveis === 1 ? "pessoa" : "pessoas"
      }!`;
    }

    this.quantidadePessoas += numPessoas;
    return `Já temos ${this.quantidadePessoas} pessoas no carro!`;
  },
  removerPessoas: function (numPessoas) {
    if (this.quantidadePessoas <= 0) {
      return "Não há ninguém no carro!";
    }

    this.quantidadePessoas -= numPessoas;
    if (this.quantidadePessoas < 0) {
      this.quantidadePessoas = 0;
    }
    return `Agora temos ${this.quantidadePessoas} ${
      this.quantidadePessoas === 1 ? "pessoa" : "pessoas"
    } no carro.`;
  },
};
console.log(carro.obterCor()); // Saída: preto
carro.mudarCor("vermelho"); // A cor do carro é agora vermelha.
console.log(carro.obterCor()); // Saída: vermelho
carro.mudarCor("verde musgo"); // A cor do carro é agora verde musgo.
console.log(carro.obterCor()); // Saída: verde musgo
console.log(carro.obterMarcaModelo()); // Saída: Esse carro é um Toyota Corolla
console.log(carro.adicionarPessoas(2)); // Saída: Já temos 2 pessoas no carro!
console.log(carro.adicionarPessoas(4)); // Saída: Só cabem mais 3 pessoas!
console.log(carro.adicionarPessoas(3)); // Saída: Já temos 5 pessoas no carro!
console.log(carro.removerPessoas(4)); // Saída: Agora temos 1 pessoa no carro.
console.log(carro.adicionarPessoas(10)); // Saída: Só cabem mais 4 pessoas!
console.log(carro.quantidadePessoas); // Saída: 1
