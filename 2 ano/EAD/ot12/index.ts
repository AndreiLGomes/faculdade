// Variáveis para cada tipo básico
let nome: string = "João";
let idade: number = 30;
let ativo: boolean = true;
let altura: number = 1.75;

// Imprimindo as variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Ativo:", ativo);
console.log("Altura:", altura);

// Tentando atribuir valores incorretos
// nome = 123; // Erro: Type 'number' is not assignable to type 'string'.
// idade = "trinta"; // Erro: Type 'string' is not assignable to type 'number'.
// ativo = "sim"; // Erro: Type 'string' is not assignable to type 'boolean'.


//----------------------------------------
//----------------------------------------


// Função que aceita um array de números e retorna a soma de todos os elementos
function somarElementos(numeros: number[]): number {
    return numeros.reduce((acc, num) => acc + num, 0);
}

// Testando a função
const numeros: number[] = [1, 2, 3, 4, 5];
console.log("Soma dos elementos:", somarElementos(numeros));


//---------------------------------------------
//---------------------------------------------


// Enum para representar os dias da semana
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

// Função que imprime uma mensagem de acordo com o dia
function mensagemDoDia(dia: DiasDaSemana): void {
    switch (dia) {
        case DiasDaSemana.Domingo:
            console.log("Hoje é domingo! Dia de descanso.");
            break;
        case DiasDaSemana.Segunda:
            console.log("Hoje é segunda! Início da semana.");
            break;
        case DiasDaSemana.Terca:
            console.log("Hoje é terça-feira. Vamos continuar a semana com força!");
            break;
        case DiasDaSemana.Quarta:
            console.log("Hoje é quarta-feira. Metade da semana!");
            break;
        case DiasDaSemana.Quinta:
            console.log("Hoje é quinta-feira. Falta pouco para o fim de semana!");
            break;
        case DiasDaSemana.Sexta:
            console.log("Hoje é sexta! Quase fim de semana!");
            break;
        case DiasDaSemana.Sabado:
            console.log("Hoje é sábado! Dia de relaxar.");
            break;
        default:
            console.log("Dia inválido.");
    }
}

// Testando a função
mensagemDoDia(DiasDaSemana.Domingo);
mensagemDoDia(DiasDaSemana.Quarta);
mensagemDoDia(DiasDaSemana.Sexta);


//-------------------------------------
//-------------------------------------

// Tupla que representa um produto (nome e preço)
let produto: [string, number] = ["Notebook", 2500.00];

// Função que imprime o nome e o preço do produto
function imprimirProduto(produto: [string, number]): void {
    const [nome, preco] = produto;
    console.log(`Produto: ${nome}, Preço: R$${preco.toFixed(2)}`);
}

// Testando a função
imprimirProduto(produto);


//---------------------------------------
//---------------------------------------

// Variável do tipo any
let variavel: any;

// Atribuindo diferentes tipos de valores
variavel = "Uma string";
console.log(variavel); // Saída: "Uma string"

variavel = 42;
console.log(variavel); // Saída: 42

variavel = true;
console.log(variavel); // Saída: true

variavel = { nome: "João", idade: 30 };
console.log(variavel); // Saída: { nome: "João", idade: 30 }

variavel = [1, 2, 3];
console.log(variavel); // Saída: [1, 2, 3]


//--------------------------------------
//--------------------------------------


// Função que não retorna nada (void)
function funcaoVoid(): void {
    console.log("Esta função não retorna nada.");
}

// Função que retorna undefined explicitamente
function funcaoUndefined(): undefined {
    console.log("Esta função retorna undefined.");
    return undefined;
}

// Chamando as funções
funcaoVoid();
const resultadoVoid = funcaoVoid(); // O valor retornado é 'undefined'
console.log("Resultado da função void:", resultadoVoid);

funcaoUndefined();
const resultadoUndefined = funcaoUndefined(); // O valor retornado é 'undefined'
console.log("Resultado da função que retorna undefined:", resultadoUndefined);
