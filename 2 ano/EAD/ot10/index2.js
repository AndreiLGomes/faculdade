//1
let itensSupermercado1 = ['Arroz', 'Feijão', 'Leite'];
let itensSupermercado2 = ['Pão', 'Ovos', 'Manteiga'];

let listaDeCompras = [...itensSupermercado1, ...itensSupermercado2];
console.log(listaDeCompras);
//2
let usuario = {
    nome: 'Carlos',
    email: 'carlos@email.com'
};

let usuarioAtualizado = {
    ...usuario,
    status: 'ativo'
};

console.log(usuarioAtualizado);
//3
function listaDeConvidados(...nomes) {
    console.log("Lista de Convidados:");
    nomes.forEach(nome => console.log(nome));
}

listaDeConvidados('Ana', 'Bruno', 'Carla', 'Diego');
//4
let musicasOriginais = ['Música 1', 'Música 2', 'Música 3'];

let musicasCopia = [...musicasOriginais];
musicasCopia[1] = 'Música Alterada';

console.log('Array Original:', musicasOriginais);
console.log('Array Copiado:', musicasCopia);
//5
let infoBasicaFilme = {
    titulo: 'O Poderoso Chefão',
    diretor: 'Francis Ford Coppola'
};

let infoComplementarFilme = {
    ano: 1972,
    genero: 'Drama/Crime'
};

let filme = {
    ...infoBasicaFilme,
    ...infoComplementarFilme
};

console.log(filme);
//6
function criarMenu(entradas, pratosPrincipais, sobremesas) {
    let menu = [...entradas, ...pratosPrincipais, ...sobremesas];
    return menu;
}

let entradas = ['Salada', 'Sopa'];
let pratosPrincipais = ['Frango', 'Peixe'];
let sobremesas = ['Sorvete', 'Torta'];

let menu = criarMenu(entradas, pratosPrincipais, sobremesas);
console.log('Menu do Restaurante:', menu);
