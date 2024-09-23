// Declarar uma variável qualquer, que receba um objeto vazio.
let meuObjeto = {};
// Declarar uma variável pessoa com informações pessoais
let pessoa = {
  nome: "Andrei",
  sobrenome: "Gomes",
  sexo: "masculino",
  idade: 45,
  altura: 1.85,
  peso: 75,
  andando: false,
  caminhouQuantosMetros: 0,

  // Método para fazer aniversário
  fazerAniversario: function () {
    this.idade += 1;
  },

  // Método para andar
  andar: function (metros) {
    this.caminhouQuantosMetros += metros;
    this.andando = true;
  },

  // Método para parar
  parar: function () {
    this.andando = false;
  },

  // Método para retornar o nome completo
  nomeCompleto: function () {
    return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
  },

  // Método para mostrar a idade
  mostrarIdade: function () {
    return `Olá, eu tenho ${this.idade} anos!`;
  },

  // Método para mostrar o peso
  mostrarPeso: function () {
    return `Eu peso ${this.peso}Kg.`;
  },

  // Método para mostrar a altura
  mostrarAltura: function () {
    return `Minha altura é ${this.altura}m.`;
  },

  // Método para apresentar a pessoa
  apresentacao: function () {
    const pronome = this.sexo === "Feminino" ? "a" : "o";
    const anoOuAnos = this.idade === 1 ? "ano" : "anos";
    const metroOuMetros = this.caminhouQuantosMetros === 1 ? "metro" : "metros";

    return `Olá, eu sou ${pronome} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anoOuAnos}, ${this.altura}m, meu peso é ${this.peso}Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metroOuMetros}!`;
  },
};

// Qual o nome completo da pessoa?
console.log(pessoa.nomeCompleto()); //Olá! Meu nome é Andrei Gomes!

// Qual a idade da pessoa?
console.log(pessoa.mostrarIdade()); //Olá, eu tenho 45 anos!

// Qual o peso da pessoa?
console.log(pessoa.mostrarPeso()); //Eu peso 75Kg.

// Qual a altura da pessoa?
console.log(pessoa.mostrarAltura()); //Minha altura é 1.85m.

// Faça a pessoa fazer 3 aniversários.
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

// Quantos anos a pessoa tem agora?
console.log(pessoa.idade); // 48

// Agora, faça a pessoa caminhar alguns metros, invocando o método andar 3x.
pessoa.andar(100);
pessoa.andar(200);
pessoa.andar(150);

// A pessoa ainda está andando?
console.log(pessoa.andando); // true

// Se a pessoa ainda está andando, faça-a parar.
pessoa.parar();

// E agora: a pessoa ainda está andando?
console.log(pessoa.andando); // false

// Quantos metros a pessoa andou?
console.log(pessoa.caminhouQuantosMetros); // 450

// Agora, apresente-se ;)
console.log(pessoa.apresentacao()); //Olá, eu sou o Andrei Gomes, tenho 48 anos, 1.85m, meu peso é 75Kg e, só hoje, eu já caminhei 450 metros!
