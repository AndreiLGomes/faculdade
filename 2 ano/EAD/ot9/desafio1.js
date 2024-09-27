// Crie uma variável qualquer, que receba um array com alguns valores
// aleatórios
valores_aleatorios = [12, 5, 23, 8, 16];
//Crie uma função que receba um array como parâmetro, e retorne esse array.
function retornaArray(array) {
  return array;
}
const meuArray = [10, 20, 30, 40, 50];
const resultado = retornaArray(meuArray);
console.log(resultado); // Saída: [10, 20, 30, 40, 50]
//Imprima o segundo índice do array retornado pela função criada acima.
console.log(resultado[1]);
// //Crie uma função que receba dois parâmetros: o primeiro, um array de valores;
// e o
// segundo, um número. A função deve retornar o valor de um índice do array
// que foi passado
// no primeiro parâmetro. O índice usado para retornar o valor, deve ser o
// número passado no
// segundo parâmetro.
function retornaValorNoIndice(array, indice) {
  return array[indice];
}
const meuArrayy = [10, 20, 30, 40, 50];
const indice = 2;
const valor = retornaValorNoIndice(meuArrayy, indice);
console.log(valor); // Saída: 30 (valor no índice 2 do array)
//Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
const arrayDiverso = [42, "texto", true, { nome: "objeto" }, [1, 2, 3]];
//Invoque a função criada acima, fazendo-a retornar todos os valores do último
//array criado.
function retornaValorNoIndice(array, indice) {
  return array[indice];
}
for (let i = 0; i < arrayDiverso.length; i++) {
  console.log(retornaValorNoIndice(arrayDiverso, i));
}
// Crie uma função chamada `book`, que recebe um parâmetro, que será o nome
// do
// livro. Dentro dessa função, declare uma variável que recebe um objeto com as
// seguintes características:
// - esse objeto irá receber 3 propriedades, que serão nomes de livros;
// - cada uma dessas propriedades será um novo objeto, que terá outras 3
// propriedades:
// - `quantidadePaginas` - Number (quantidade de páginas)
// - `autor` - String
// - `editora` - String
// - A função deve retornar o objeto referente ao livro passado por parâmetro.
// - Se o parâmetro não for passado, a função deve retornar o objeto com todos
// os livros.
function book(nomeDoLivro) {
  const livros = {
    "O Senhor dos Anéis": {
      quantidadePaginas: 1178,
      autor: "J.R.R. Tolkien",
      editora: "HarperCollins",
    },
    1984: {
      quantidadePaginas: 328,
      autor: "George Orwell",
      editora: "Secker & Warburg",
    },
    "Dom Quixote": {
      quantidadePaginas: 863,
      autor: "Miguel de Cervantes",
      editora: "Penguin Classics",
    },
  };

  // Se o parâmetro for passado, retorna o objeto referente ao livro
  if (nomeDoLivro) {
    return livros[nomeDoLivro] || "Livro não encontrado";
  }

  // Se o parâmetro não for passado, retorna todos os livros
  return livros;
}

// Usando a função criada acima, imprima o objeto com todos os livros.
console.log(book());

// Exemplo de saída:
/*
{
'O Senhor dos Anéis': { quantidadePaginas: 1178, autor: 'J.R.R. Tolkien', editora: 'HarperCollins' },
'1984': { quantidadePaginas: 328, autor: 'George Orwell', editora: 'Secker & Warburg' },
'Dom Quixote': { quantidadePaginas: 863, autor: 'Miguel de Cervantes', editora: 'Penguin Classics' }
}
*/

// Imprimindo a quantidade de páginas de um livro qualquer
const nomeDoLivro = "1984";
const livro = book(nomeDoLivro);
console.log(`O livro ${nomeDoLivro} tem ${livro.quantidadePaginas} páginas!`);

// Exemplo de saída:
// "O livro 1984 tem 328 páginas!"

// Imprimindo o nome do autor de um livro qualquer
console.log(`O autor do livro ${nomeDoLivro} é ${livro.autor}.`);

// Exemplo de saída:
// "O autor do livro 1984 é George Orwell."

// Imprimindo o nome da editora de um livro qualquer
console.log(
  `O livro ${nomeDoLivro} foi publicado pela editora ${livro.editora}.`
);

// Exemplo de saída:
// "O livro 1984 foi publicado pela editora Secker & Warburg."
