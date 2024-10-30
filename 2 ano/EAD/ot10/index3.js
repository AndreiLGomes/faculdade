//1
let array = [10, 20, 30];
let [primeiro, segundo, terceiro] = array;

console.log(primeiro); // 10
console.log(segundo);  // 20
console.log(terceiro); // 30
//2
let pessoa = {
    nome: 'Maria',
    idade: 25
};

let { nome, idade } = pessoa;

console.log(nome);  // 'Maria'
console.log(idade); // 25
//3
function exibirUsuario({ nome, idade }) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

let usuario = { nome: 'Carlos', idade: 30 };
exibirUsuario(usuario);
//4
let arrayAninhado = [[1, 2], [3, 4], [5, 6]];
let [[a, b], [c, d], [e, f]] = arrayAninhado;

console.log(a, b); // 1 2
console.log(c, d); // 3 4
console.log(e, f); // 5 6
//5
let arrayComUmElemento = [42];
let [valor1, valor2 = 100] = arrayComUmElemento;

console.log(valor1); // 42
console.log(valor2); // 100 (valor padrão)
//6
let x = 'primeiro';
let y = 'segundo';

[x, y] = [y, x];

console.log(x); // 'segundo'
console.log(y); // 'primeiro'
