var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1
function primeiroElemento(array) {
    return array[0];
}
var numeros = [10, 20, 30];
var primeiroNumero = primeiroElemento(numeros);
console.log(primeiroNumero); // Saída: 10
var palavras = ["apple", "banana", "cherry"];
var primeiraPalavra = primeiroElemento(palavras);
console.log(primeiraPalavra); // Saída: apple
var objetos = [{ nome: "Alice" }, { nome: "Bob" }];
var primeiroObjeto = primeiroElemento(objetos);
console.log(primeiroObjeto); // Saída: { nome: "Alice" }
var vazio = [];
var primeiroVazio = primeiroElemento(vazio);
console.log(primeiroVazio); // Saída: undefined
//2
console.log("2");
// Implementação da interface em uma classe
var PilhaArray = /** @class */ (function () {
    function PilhaArray() {
        this.itens = [];
    }
    PilhaArray.prototype.push = function (item) {
        this.itens.push(item);
    };
    PilhaArray.prototype.pop = function () {
        return this.itens.pop();
    };
    PilhaArray.prototype.tamanho = function () {
        return this.itens.length;
    };
    return PilhaArray;
}());
var pilhaNumeros = new PilhaArray();
pilhaNumeros.push(10);
pilhaNumeros.push(20);
pilhaNumeros.push(30);
console.log(pilhaNumeros.pop()); // Saída: 30
console.log(pilhaNumeros.tamanho()); // Saída: 2
var pilhaStrings = new PilhaArray();
pilhaStrings.push("apple");
pilhaStrings.push("banana");
console.log(pilhaStrings.pop()); // Saída: banana
console.log(pilhaStrings.tamanho()); // Saída: 1
//3
console.log("3");
// Implementação da classe genérica Mapa<K, V>
var Mapa = /** @class */ (function () {
    function Mapa() {
        this.itens = [];
    }
    Mapa.prototype.adicionar = function (chave, valor) {
        var itemExistente = undefined;
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.chave === chave) {
                itemExistente = item;
                break;
            }
        }
        if (itemExistente) {
            itemExistente.valor = valor;
        }
        else {
            this.itens.push({ chave: chave, valor: valor });
        }
    };
    Mapa.prototype.buscar = function (chave) {
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.chave === chave) {
                return item.valor;
            }
        }
        return undefined;
    };
    Mapa.prototype.remover = function (chave) {
        this.itens = this.itens.filter(function (item) { return item.chave !== chave; });
    };
    Mapa.prototype.listar = function () {
        return this.itens;
    };
    return Mapa;
}());
var mapa1 = new Mapa();
mapa1.adicionar(1, "Um");
mapa1.adicionar(2, "Dois");
mapa1.adicionar(3, "Três");
console.log(mapa1.buscar(2));
mapa1.remover(2);
console.log(mapa1.buscar(2)); // Saída: undefined
console.log(mapa1.listar()); // Saída: [ { chave: 1, valor: 'Um' }, { chave: 3, valor: 'Três' } ]
var mapa2 = new Mapa();
mapa2.adicionar("a", 100);
mapa2.adicionar("b", 200);
console.log(mapa2.buscar("a")); // Saída: 100
console.log(mapa2.listar()); // Saída: [ { chave: 'a', valor: 100 }, { chave: 'b', valor: 200 } ]
//4
console.log("4");
// Função genérica com restrições
function processar(input) {
    if (typeof input === "string") {
        return "String processada: ".concat(input.toUpperCase());
    }
    else {
        return "Array processado: [".concat(input.join(", "), "]");
    }
}
// Com uma string
var resultadoString = processar("olá!!!!");
console.log(resultadoString); // Saída: String processada: HELLO WORLD
// Com um array
var resultadoArray = processar([1, 2, 3, 4, 5]);
console.log(resultadoArray); // Saída: Array processado: [1, 2, 3, 4, 5]
//5
console.log("5");
// Função genérica que combina dois objetos
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// Exemplos de uso
// Combinação de dois objetos simples
var objeto1 = { nome: "Alice", idade: 25 };
var objeto2 = { cidade: "São Paulo", ativo: true };
var combinado = mergeObjects(objeto1, objeto2);
console.log(combinado);
// Saída: { nome: 'Alice', idade: 25, cidade: 'São Paulo', ativo: true }
// Combinação com tipos mais complexos
var objeto3 = { produtos: ["Banana", "Maçã"], estoque: 50 };
var objeto4 = { fornecedor: "SuperFrutas", contato: "1234-5678" };
var combinadoComplexo = mergeObjects(objeto3, objeto4);
console.log(combinadoComplexo);
// Saída: { produtos: [ 'Banana', 'Maçã' ], estoque: 50, fornecedor: 'SuperFrutas', contato: '1234-5678' }
