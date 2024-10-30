// O que é TypeScript e quais são suas principais vantagens em relação ao
// JavaScript? Cite pelo menos duas vantagens.

//1 - TypeScript permite definir tipos para variáveis, funções e objetos (por exemplo, string, number, boolean), 
// o que facilita a detecção de erros durante o desenvolvimento, antes mesmo do código ser executado.
//2 - TypeScript melhora a legibilidade e a organização de projetos grandes por meio de interfaces, tipos personalizados 
// e módulos, facilitando o trabalho em equipe e a expansão do código ao longo do tempo.

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// Analise o seguinte código em TypeScript e explique qual é a diferença
// em relação ao equivalente em JavaScript:

// no parâmetro  precisa ser tipados, a e b devem ser números.
// No JavaScript, essa restrição não existe, e qualquer tipo de dado poderia ser passado,
// o que aumenta o risco de erros em tempo de execução.
// O TypeScript irá lançar um erro de compilação, pois está sendo passado um argumento "5" (uma string),
// enquanto a função espera ambos os parâmetros como number.
// Em JavaScript, esse código seria executado sem problemas,
// resultando em uma coerção implícita (a string "5" seria convertida para o número 5), e o resultado seria 20.

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// Quais os passos necessários para instalar o TypeScript e configurar um
// novo projeto? Liste pelo menos três etapas.

// 1 Instalar o Node.js (com npm).
// 2 Instalar o TypeScript globalmente.
// 3 Inicializar o projeto e criar o tsconfig.json.

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// O que é o arquivo tsconfig.json e qual a sua importância na
// configuração do TypeScript? Cite pelo menos duas configurações que
// podem ser definidas nesse arquivo.

// O tsconfig.json é o arquivo de configuração do TypeScript.
// Ele define as opções de compilação que o compilador TypeScript (tsc) deve seguir para compilar o código.
// Esse arquivo é essencial para personalizar
// como o projeto será compilado e quais recursos do TypeScript estarão habilitados.
// target: Define para qual versão de JavaScript o TypeScript será compilado.
// strict:Ativa o modo estrito, que habilita uma série de verificações para tornar o
// código mais seguro e evitar erros.

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// Depois de criar um arquivo TypeScript (index.ts), quais comandos
// você deve executar para compilar e rodar o código? Descreva
// brevemente o que acontece em cada etapa.

//tsc index.ts:O compilador TypeScript (tsc) converte o código TypeScript em um arquivo JavaScript.
//Se a compilação for bem-sucedida, um novo arquivo chamado index.js será gerado.
//node index.js:O Node.js executa o código JavaScript gerado (no arquivo index.js).
//Você verá a saída do programa no terminal, como resultado das instruções definidas no arquivo index.ts.
//Compilar com tsc: Converte o código TypeScript (index.ts) para JavaScript (index.js), verificando se há erros de tipo.
//Executar com node: Roda o arquivo JavaScript gerado usando Node.js.