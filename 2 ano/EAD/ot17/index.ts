//1
function primeiroElemento<T>(array: T[]): T | undefined {
    return array[0];
  }
  const numeros = [10, 20, 30];
  const primeiroNumero = primeiroElemento(numeros);
  console.log(primeiroNumero); // Saída: 10
  const palavras = ["apple", "banana", "cherry"];
  const primeiraPalavra = primeiroElemento(palavras);
  console.log(primeiraPalavra); // Saída: apple
  const objetos = [{ nome: "Alice" }, { nome: "Bob" }];
  const primeiroObjeto = primeiroElemento(objetos);
  console.log(primeiroObjeto); // Saída: { nome: "Alice" }
  const vazio: number[] = [];
  const primeiroVazio = primeiroElemento(vazio);
  console.log(primeiroVazio); // Saída: undefined
  //2
  console.log("2");
  // Definição da interface genérica Pilha<T>
interface Pilha<T> {
    push(item: T): void;
    pop(): T | undefined; 
    tamanho(): number; 
  }
  
  // Implementação da interface em uma classe
  class PilhaArray<T> implements Pilha<T> {
    private itens: T[] = []; 
  
    push(item: T): void {
      this.itens.push(item); 
    }
  
    pop(): T | undefined {
      return this.itens.pop(); 
    }
  
    tamanho(): number {
      return this.itens.length; 
    }
  }
  const pilhaNumeros = new PilhaArray<number>();
  pilhaNumeros.push(10);
  pilhaNumeros.push(20);
  pilhaNumeros.push(30);
  console.log(pilhaNumeros.pop()); // Saída: 30
  console.log(pilhaNumeros.tamanho()); // Saída: 2
  
  
  const pilhaStrings = new PilhaArray<string>();
  pilhaStrings.push("apple");
  pilhaStrings.push("banana");
  console.log(pilhaStrings.pop()); // Saída: banana
  console.log(pilhaStrings.tamanho()); // Saída: 1
  //3
  console.log("3");
  // Implementação da classe genérica Mapa<K, V>
class Mapa<K, V> {
    private itens: { chave: K; valor: V }[] = [];
  
    adicionar(chave: K, valor: V): void {
        let itemExistente = undefined;
      
        for (const item of this.itens) {
          if (item.chave === chave) {
            itemExistente = item;
            break;
          }
        }
      
        if (itemExistente) {
          itemExistente.valor = valor;
        } else {
          this.itens.push({ chave, valor });
        }
      }
      
      buscar(chave: K): V | undefined {
        for (const item of this.itens) {
          if (item.chave === chave) {
            return item.valor;
          }
        }
        return undefined;
      }
      
  
    remover(chave: K): void {
      this.itens = this.itens.filter((item) => item.chave !== chave);
    }
  
   
    listar(): { chave: K; valor: V }[] {
      return this.itens;
    }
  }
  
  const mapa1 = new Mapa<number, string>();
  mapa1.adicionar(1, "Um");
  mapa1.adicionar(2, "Dois");
  mapa1.adicionar(3, "Três");
  
  console.log(mapa1.buscar(2)); 
  mapa1.remover(2);
  console.log(mapa1.buscar(2)); // Saída: undefined
  console.log(mapa1.listar()); // Saída: [ { chave: 1, valor: 'Um' }, { chave: 3, valor: 'Três' } ]
  

  const mapa2 = new Mapa<string, number>();
  mapa2.adicionar("a", 100);
  mapa2.adicionar("b", 200);
  console.log(mapa2.buscar("a")); // Saída: 100
  console.log(mapa2.listar()); // Saída: [ { chave: 'a', valor: 100 }, { chave: 'b', valor: 200 } ]

  //4
  console.log("4");
  // Função genérica com restrições
function processar<T extends string | any[]>(input: T): string {
    if (typeof input === "string") {
      return `String processada: ${input.toUpperCase()}`;
    } else {
      return `Array processado: [${input.join(", ")}]`;
    }
  }
  // Com uma string
  const resultadoString = processar("olá!!!!");
  console.log(resultadoString); // Saída: String processada: HELLO WORLD
  
  // Com um array
  const resultadoArray = processar([1, 2, 3, 4, 5]);
  console.log(resultadoArray); // Saída: Array processado: [1, 2, 3, 4, 5]
  //5
  console.log("5");
  // Função genérica que combina dois objetos
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  

  const objeto1 = { nome: "Alice", idade: 25 };
  const objeto2 = { cidade: "São Paulo", ativo: true };
  
  const combinado = mergeObjects(objeto1, objeto2);
  console.log(combinado);
  
  const objeto3 = { produtos: ["Banana", "Maçã"], estoque: 50 };
  const objeto4 = { fornecedor: "SuperFrutas", contato: "1234-5678" };
  
  const combinadoComplexo = mergeObjects(objeto3, objeto4);
  console.log(combinadoComplexo);
  // Saída: { produtos: [ 'Banana', 'Maçã' ], estoque: 50, fornecedor: 'SuperFrutas', contato: '1234-5678' }
  
  
  
  
  
  