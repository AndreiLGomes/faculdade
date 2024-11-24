
//1
interface Contato {
    email: string;
    telefone: string;
  }
  function imprimirContato(contato: Contato): void {
    console.log(`Email: ${contato.email}`);
    console.log(`Telefone: ${contato.telefone}`);
  }
  const meuContato: Contato = {
    email: "exemplo@email.com",
    telefone: "(11) 99999-9999",
  };
  imprimirContato(meuContato);
  //2
type OperacaoMatematica = (a: number, b: number) => number;
const soma: OperacaoMatematica = (a, b) => a + b;
const subtracao: OperacaoMatematica = (a, b) => a - b;
const multiplicacao: OperacaoMatematica = (a, b) => a * b;
const divisao: OperacaoMatematica = (a, b) => {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return a / b;
};
console.log("Soma:", soma(10, 5));           // Saída: Soma: 15
console.log("Subtração:", subtracao(10, 5)); // Saída: Subtração: 5
console.log("Multiplicação:", multiplicacao(10, 5)); // Saída: Multiplicação: 50
console.log("Divisão:", divisao(10, 5));     // Saída: Divisão: 2
//3
// Definição da interface com propriedade opcional
interface Configuracao {
    background?: string; 
  }
  function definirConfiguracao(config: Configuracao): void {
    const bg = config.background || "padrão branco";
    console.log(`A configuração do aplicativo foi definida com o background: ${bg}`);
  }
const config1: Configuracao = { background: "azul" };
  definirConfiguracao(config1); 
  const config2: Configuracao = {};
  definirConfiguracao(config2);
//4
// Função que aceita string ou string[] como entrada
function processarEntrada(entrada: string | string[]): string {
    if (Array.isArray(entrada)) {
      return entrada.join(", ");
    }
    return entrada;
  }
  const resultado1 = processarEntrada("Texto único");
  console.log(resultado1); 
  const resultado2 = processarEntrada(["Texto 1", "Texto 2", "Texto 3"]);
  console.log(resultado2); 
  //5
  // Definição da interface Jogo
interface Jogo {
    nome: string;
    preco: number;
    jogar?: () => void; // Método opcional
  }
   // Função que aceita um objeto do tipo Jogo
  function descricaoJogo(jogo: Jogo): void {
    console.log(`Jogo: ${jogo.nome}`);
    console.log(`Preço: R$${jogo.preco.toFixed(2)}`);
    if (jogo.jogar) {
      console.log("Convidando você para jogar...");
      jogo.jogar(); // Chama o método jogar
    } else {
      console.log("Este jogo não pode ser jogado agora.");
    }
  }
  // Jogo com o método jogar
  const jogo1: Jogo = {
    nome: "Aventura Épica",
    preco: 59.99,
    jogar: () => console.log("Iniciando o jogo: Aventura Épica!")
  };
  // Jogo sem o método jogar
  const jogo2: Jogo = {
    nome: "Quebra-Cabeça Relaxante",
    preco: 29.99
  };
  descricaoJogo(jogo1);
  /*
  Saída:
  Jogo: Aventura Épica
  Preço: R$59.99
  Convidando você para jogar...
  Iniciando o jogo: Aventura Épica!
  */
  descricaoJogo(jogo2);
  /*
  Saída:
  Jogo: Quebra-Cabeça Relaxante
  Preço: R$29.99
  Este jogo não pode ser jogado agora.
  */
  