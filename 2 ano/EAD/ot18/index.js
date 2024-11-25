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
function trabalharComUnionEIntersection(parametro1, // Union Type
parametro2 // Intersection Type
) {
    var tipoParametro1 = typeof parametro1 === "string"
        ? "string com valor: \"".concat(parametro1, "\"")
        : "number com valor: ".concat(parametro1);
    var descricaoParametro2 = "\n      PropriedadeA: ".concat(parametro2.propriedadeA, ",\n      Valor: ").concat(parametro2.valor, ",\n      PropriedadeB: ").concat(parametro2.propriedadeB, ",\n      Ativo: ").concat(parametro2.ativo ? "Sim" : "Não", "\n    ");
    return "Par\u00E2metro 1 \u00E9 um ".concat(tipoParametro1, "\nPar\u00E2metro 2 tem as propriedades:\n").concat(descricaoParametro2);
}
var parametro1 = 42;
var parametro2 = {
    propriedadeA: "Teste A",
    valor: 100,
    propriedadeB: "Teste B",
    ativo: true,
};
console.log(trabalharComUnionEIntersection(parametro1, parametro2));
//2
console.log("2");
function obterDetalhes(flag) {
    if (flag) {
        return {
            propriedadeA: "Exemplo A",
            valor: 42,
        };
    }
    else {
        return {
            propriedadeB: "Exemplo B",
            ativo: false,
        };
    }
}
// Quando flag é true, retorna TipoA
var detalhesA = obterDetalhes(true);
console.log(detalhesA);
// Saída: { propriedadeA: 'Exemplo A', valor: 42 }
// Quando flag é false, retorna TipoB
var detalhesB = obterDetalhes(false);
console.log(detalhesB);
// Saída: { propriedadeB: 'Exemplo B', ativo: false }
//3
console.log("3");
function atualizarConfiguracao(configuracaoAtual, configuracoesNovas) {
    return __assign(__assign({}, configuracaoAtual), configuracoesNovas);
}
function exibirConfiguracao(configuracao) {
    console.log("Configuração Atual:");
    console.log("Tema: ".concat(configuracao.tema));
    console.log("Idioma: ".concat(configuracao.idioma));
    console.log("Exibir Notifica\u00E7\u00F5es: ".concat(configuracao.exibirNotificacoes));
}
var configuracaoInicial = {
    tema: "Claro",
    idioma: "Português",
    exibirNotificacoes: true,
};
var novaConfiguracao = atualizarConfiguracao(configuracaoInicial, {
    tema: "Escuro",
});
console.log("Nova Configuração:", novaConfiguracao);
// Saída: Nova Configuração: { tema: 'Escuro', idioma: 'Português', exibirNotificacoes: true }
exibirConfiguracao(novaConfiguracao);
// Saída:
// Configuração Atual:
// Tema: Escuro
// Idioma: Português
// Exibir Notificações: true
//4
console.log("4");
function criarMapaDeCapitais() {
    return {
        Brasil: "Brasília",
        Alemanha: "Berlim",
        França: "Paris",
        Japão: "Tóquio",
        EstadosUnidos: "Washington, D.C.",
    };
}
function buscarCapital(pais, mapa) {
    var capital = mapa[pais];
    return capital
        ? "A capital de ".concat(pais, " \u00E9 ").concat(capital, ".")
        : "Capital de ".concat(pais, " n\u00E3o encontrada.");
}
var mapaCapitais = criarMapaDeCapitais();
// Buscando capitais
console.log(buscarCapital("Brasil", mapaCapitais)); // Saída: A capital de Brasil é Brasília.
console.log(buscarCapital("Japão", mapaCapitais)); // Saída: A capital de Japão é Tóquio.
console.log(buscarCapital("Itália", mapaCapitais)); // Saída: Capital de Itália não encontrada.
//5
console.log("5");
// Função genérica que retorna um array de Partial<T>
function criarListaParcial(itens) {
    return itens;
}
var configuracoesParciais = criarListaParcial([
    { tema: "Escuro" },
    { idioma: "Português" },
    { exibirNotificacoes: false },
    { tema: "Claro", idioma: "Inglês" },
]);
console.log(configuracoesParciais);
/* Saída:
[
  { tema: 'Escuro' },
  { idioma: 'Português' },
  { exibirNotificacoes: false },
  { tema: 'Claro', idioma: 'Inglês' }
]
*/
