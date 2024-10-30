//1
class Animal {
  constructor(nome, som) {
    this.nome = nome;
    this.som = som;
  }
  falar() {
    console.log(`${this.nome} faz: ${this.som}`);
  }
}
const cachorro = new Animal("Cachorro", "Au Au");
cachorro.falar(); //Au Au
//2
class Veiculo {
  constructor(marca, modelo, velocidadeMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadeMaxima = velocidadeMaxima;
  }
  descrever() {
    console.log(
      `Este veículo é um ${this.marca} ${this.modelo} com velocidade máxima de ${this.velocidadeMaxima} km/h.`
    );
  }
}
const carro = new Veiculo("Toyota", "Corolla", 180);
carro.descrever();
//3
class Estudante {
  constructor(nome, notas) {
    this.nome = nome;
    this.notas = notas;
  }
  calcularMedia() {
    const soma = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return soma / this.notas.length;
  }
  descrever() {
    console.log(
      `O estudante ${this.nome} tem uma média de ${this.calcularMedia().toFixed(
        2
      )}.`
    );
  }
}
const estudante = new Estudante("Carlos", [8, 7.5, 9, 6]);
console.log(estudante.calcularMedia());
estudante.descrever();
//4
class Utilitario {
  static celsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
}
const tempEmCelsius = 25;
const tempEmFahrenheit = Utilitario.celsiusParaFahrenheit(tempEmCelsius);
console.log(`${tempEmCelsius}°C é igual a ${tempEmFahrenheit}°F.`);
//5
class Jogo {
  static jogar(adivinhar) {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    if (adivinhar === numeroAleatorio) {
      return `Parabéns! Você acertou, o número era ${numeroAleatorio}.`;
    } else {
      return `Que pena! Você errou. O número era ${numeroAleatorio}.`;
    }
  }
}
const tentativa = 7;
console.log(Jogo.jogar(tentativa));
//6
class ContaBancaria {
  constructor(titular, saldo = 0.0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `Saque de R$ ${valor.toFixed(
          2
        )} realizado. Novo saldo: R$ ${this.saldo.toFixed(2)}`
      );
    } else if (valor > this.saldo) {
      console.log("Saldo insuficiente para realizar o saque.");
    } else {
      console.log("Valor de saque inválido.");
    }
  }
}
const conta = new ContaBancaria("João", 1000);
conta.sacar(200); // Saque de R$ 200.00 realizado. Novo saldo: R$ 1300.00
conta.sacar(1500); // Saldo insuficiente para realizar o saque.
