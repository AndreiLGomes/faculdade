// 1
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2023,
};
console.log(carro.modelo);
// 2
carro.cor = "Preto";
carro.ano = 2024;
console.log(carro);
//3
const calculadora = {
  soma: function (numero1, numero2) {
    return numero1 + numero2;
  },
};
const resultado = calculadora.soma(5, 3);
console.log(resultado);
//4
const pessoa = {
  nome: "João",
  idade: 30,
  profissão: "Desenvolvedor",
  cidade: "São Paulo",
};
for (const propriedade in pessoa) {
  if (pessoa.hasOwnProperty(propriedade)) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
  }
}
//5
const livro = {
  titulo: "O Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
};
const outroLivro = livro;
outroLivro.titulo = "O Hobbit";
console.log(livro);
//6
const pessoaAna = {
  nome: "Ana",
  idade: 25,
  profissão: "Designer",
  cidade: "Rio de Janeiro",
};
const chaves = Object.keys(pessoaAna);
console.log("Chaves:", chaves);
const valores = Object.values(pessoaAna);
console.log("Valores:", valores);
