// 1. Criar e Adicionar Pares Chave-Valor no Map: Crie um Map chamado
// livros e adicione nele três pares de chave-valor, onde a chave é o
// título do livro e o valor é o autor.
let livros = new Map();
livros.set('harry potter', 'J.K');
livros.set('senhor dos aneis', 'Tokkin');
livros.set('Super amarelo feliz', 'Anderson');
// 2. Acessar Valor no Map: Acesse o valor associado a uma das chaves no
// Map livros que você criou e imprima o nome do autor.
console.log(livros.get('senhor dos aneis'));
// 3. Iterar Sobre um Map: Use um loop for...of para iterar sobre o Map
// livros e imprimir todos os pares chave-valor. 
for(let[chave, valor] of livros){
    console.log(`${chave}: ${valor}`);
}
// 4. Usando Métodos do Map: size, delete, has: No seu Map livros, use o
// método size para imprimir o número de livros, delete para remover um
// livro pelo título e has para verificar se um livro ainda está no Map.
console.log(livros.size);
livros.delete('super amarelo feliz');
console.log(livros.has('super amarelo feliz'));
// 5. Map com Tipos de Chaves Diferentes: Crie um Map chamado colecao
// que contém diferentes tipos de chaves (como string, number, object)
// e seus respectivos valores.
const colecao = new Map();
colecao.set('nome', 'João'); 
colecao.set(1, 'Um');       
colecao.set(true, 'Verdadeiro');
colecao.set({ id: 1 }, 'Objeto com ID 1'); 
colecao.set(Symbol('simbolo'), 'Símbolo Único');
