//1
// Definição da classe Carro
class Carro {
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
    imprimirDescricao(): void {
      console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
  }
  const carro1 = new Carro("Toyota", "Corolla", 2020);
  const carro2 = new Carro("Ford", "Mustang", 2023);
  carro1.imprimirDescricao(); // Saída: Carro: Toyota Corolla, Ano: 2020
  carro2.imprimirDescricao(); // Saída: Carro: Ford Mustang, Ano: 2023
  //2
  console.log("2")
class Carro2 {
    marca: string;
    modelo: string;
    ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    imprimirDescricao(): void {
      console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`);
    }
  }
  // Classe derivada: CarroEletrico
  class CarroEletrico extends Carro {
    capacidadeBateria: number; 
  
    constructor(marca: string, modelo: string, ano: number, capacidadeBateria: number) {
      
      super(marca, modelo, ano);
      this.capacidadeBateria = capacidadeBateria;
    }
    imprimirDescricao(): void {
      super.imprimirDescricao(); // Chama o método da classe base
      console.log(`Capacidade da Bateria: ${this.capacidadeBateria} kWh`);
    }
  }
  const carroEletrico1 = new CarroEletrico("Tesla", "Model S", 2023, 100);
  const carroEletrico2 = new CarroEletrico("Nissan", "Leaf", 2022, 40);
  
  carroEletrico1.imprimirDescricao();
  /*
  Saída:
  Carro: Tesla Model S, Ano: 2023
  Capacidade da Bateria: 100 kWh
  */
  
  carroEletrico2.imprimirDescricao();
  /*
  Saída:
  Carro: Nissan Leaf, Ano: 2022
  Capacidade da Bateria: 40 kWh
  */
 //3
 console.log("3")
 class Conta {
    private saldo: number;
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
   
    depositar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do depósito deve ser positivo.");
        return;
      }
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  
   
    obterSaldo(): string {
      return `Saldo atual: R$${this.saldo.toFixed(2)}`;
    }
  }
  const minhaConta = new Conta(100); // Saldo inicial de 100
  console.log(minhaConta.obterSaldo()); // Saída: Saldo atual: R$100.00
  
  minhaConta.depositar(50); // Depósito de 50
  console.log(minhaConta.obterSaldo()); // Saída: Saldo atual: R$150.00
  
  minhaConta.depositar(-10); // Tentativa de depósito inválido
  // Saída: O valor do depósito deve ser positivo.
  console.log(minhaConta.obterSaldo()); // Saldo permanece R$150.00
//4  
console.log("4");
// Classe base: Conta
class Conta2 {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      if (valor <= 0) {
        console.log("O valor do depósito deve ser positivo.");
        return;
      }
      this.saldo += valor;
      console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  
    obterSaldo(): string {
      return `Saldo atual: R$${this.saldo.toFixed(2)}`;
    }
  
    calcularJuros(): number {
      const taxa = 0.01; // Taxa padrão: 1%
      return this.saldo * taxa;
    }
  }
  
  class ContaCorrente extends Conta2 {
    calcularJuros(): number {
      const taxa = 0.02; // Taxa específica: 2%
      const saldo = parseFloat(this.obterSaldo().replace("Saldo atual: R$", ""));
      return saldo * taxa;
    }
  }
  
  // Criando instâncias corrigidas
  const contaPadrao = new Conta2(1000); // Corrigido para Conta2
  const contaCorrente = new ContaCorrente(1000);
  
  console.log("Conta Padrão:");
  console.log(contaPadrao.obterSaldo());
  console.log(`Juros: R$${contaPadrao.calcularJuros().toFixed(2)}`);
  // Saída:
  // Conta Padrão:
  // Saldo atual: R$1000.00
  // Juros: R$10.00
  
  console.log("\nConta Corrente:");
  console.log(contaCorrente.obterSaldo());
  console.log(`Juros: R$${contaCorrente.calcularJuros().toFixed(2)}`);
  // Saída:
  // Conta Corrente:
  // Saldo atual: R$1000.00
  // Juros: R$20.00
  //5
  console.log("5")
 
interface Motorizavel {
    ligarMotor(): void;
  }
  

  class Barco implements Motorizavel {
    ligarMotor(): void {
      console.log("Motor do barco foi ligado. Pronto para navegar!");
    }
  }
  

  class Motocicleta implements Motorizavel {
    ligarMotor(): void {
      console.log("Motor da motocicleta foi ligado. Pronto para acelerar!");
    }
  }
  
  
  const meuBarco = new Barco();
  const minhaMoto = new Motocicleta();
  
  meuBarco.ligarMotor(); // Saída: Motor do barco foi ligado. Pronto para navegar!
  minhaMoto.ligarMotor(); // Saída: Motor da motocicleta foi ligado. Pronto para acelerar!
  
  