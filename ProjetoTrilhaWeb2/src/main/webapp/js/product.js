COLDIGO.produto = new Object();

$(document).ready(function () {
    // Carrega as marcas registradas no BD no select do formulário de inserir ou editar
    COLDIGO.produto.carregarMarcas = function (id) {
        var select = id != undefined ? "#selMarcaEdicao" : "#selMarca";

        $.ajax({
            type: "GET",
            url: COLDIGO.PATH + "marca/buscarr",
            success: function (marcas) {
                if (marcas != "") {
                    $(select).html("");
                    var option = document.createElement("option");
                    option.setAttribute("value", "");
                    option.innerHTML = "Escolha";
                    $(select).append(option);

                    for (var i = 0; i < marcas.length; i++) {
                        console.log(marcas[i].id + "-" + marcas[i].nome);

                        var option = document.createElement("option");
                        option.setAttribute("value", marcas[i].id);

                        if (id != undefined && id == marcas[i].id) {
                            option.setAttribute("selected", "selected");
                        }

                        option.innerHTML = marcas[i].nome;
                        $(select).append(option);
                    }
                } else {
                    $(select).html("");
                    var option = document.createElement("option");
                    option.setAttribute("value", "");
                    option.innerHTML = "Cadastre uma marca primeiro!";
                    $(select).append(option);
                    $(select).addClass("aviso");
                }
            },
            error: function (info) {
                COLDIGO.exibirAviso("Erro ao buscar as marcas " + info.status + " - " + info.statusText);

                $(select).html("");
                var option = document.createElement("option");
                option.setAttribute("value", "");
                option.innerHTML = "Erro ao carregar marcas!";
                $(select).append(option);
                $(select).addClass("aviso");
            },
        });
    };

    COLDIGO.produto.carregarMarcas();

    // Cadastra no BD o produto informado
    COLDIGO.produto.cadastrar = function () {
        var produto = {
            categoria: document.frmAddProduto.categoria.value,
            marcaId: document.frmAddProduto.marcaId.value,
            modelo: document.frmAddProduto.modelo.value,
            capacidade: document.frmAddProduto.capacidade.value,
            valor: document.frmAddProduto.valor.value,
        };

        console.log("aqui o produto", produto);

        if (
            produto.categoria == "" ||
            produto.marcaId == "" ||
            produto.modelo == "" ||
            produto.capacidade == "" ||
            produto.valor == ""
        ) {
            COLDIGO.exibirAviso("Preencha todos os campos!");
        } else {
            $.ajax({
                type: "POST",
                url: COLDIGO.PATH + "produto/inserir",
                data: JSON.stringify(produto),
                success: function (msg) {
                    COLDIGO.exibirAviso(msg);
                    $("#addProduto").trigger("reset");
                },
                error: function (info) {
                    COLDIGO.exibirAviso("Erro ao cadastrar um novo produto: " + info.status + " - " + info.statusText);
                },
            });
        }
    };

    // Busca no BD e exibe na página os produtos que atendam a solicitação do usuário
    COLDIGO.produto.buscar = function () {
        var valorBusca = $("#campoBuscaProduto").val();
        $.ajax({
            type: "GET",
            url: COLDIGO.PATH + "produto/buscar",
            data: "valorBusca=" + valorBusca,
            success: function (dados) {
                dados = JSON.parse(dados);
                $("#listaProdutos").html(COLDIGO.produto.exibir(dados));
            },
            error: function (info) {
                COLDIGO.exibirAviso("Erro ao consultar os contatos: " + info.status + " - " + info.statusText);
            },
        });
    };

    COLDIGO.produto.exibir = function (listaDeProdutos) {
        var tabela =
            "<table>" +
            "<tr>" +
            "<th>Categoria</th>" +
            "<th>Marca</th>" +
            "<th>Modelo</th>" +
            "<th>Cap.(l)</th>" +
            "<th>Valor</th>" +
            "<th class='acoes'>Ações</th>" +
            "</tr>";

        if (listaDeProdutos && listaDeProdutos.length > 0) {
            for (var i = 0; i < listaDeProdutos.length; i++) {
                tabela +=
                    "<tr>" +
                    "<td>" + listaDeProdutos[i].categoria + "</td>" +
                    "<td>" + listaDeProdutos[i].marcaNome + "</td>" +
                    "<td>" + listaDeProdutos[i].modelo + "</td>" +
                    "<td>" + listaDeProdutos[i].capacidade + "</td>" +
                    "<td>R$ " + COLDIGO.formatarDinheiro(listaDeProdutos[i].valor) + "</td>" +
                    "<td>" +
                    "<a onclick=\"COLDIGO.produto.exibirEdicao('" + listaDeProdutos[i].id + "')\"><img src='../../img/edit.png' alt='Editar registro'></a> " +
                    "<a onclick=\"COLDIGO.produto.excluir('" + listaDeProdutos[i].id + "')\">  <img src='../../img/delete.png' alt='Excluir registro'></a>" +
                    "</td>" +
                    "</tr>";
            }
        } else {
            tabela += "<tr><td colspan='6'>Nenhum registro encontrado</td></tr>";
        }

        tabela += "</table>";
        return tabela;
    };

    // Executa a função de buscar ao carregar a página
    COLDIGO.produto.buscar();

    // Exclui o produto selecionado
    COLDIGO.produto.excluir = function (id) {
        $.ajax({
            type: "DELETE",
            url: COLDIGO.PATH + "produto/excluir/" + id,
            success: function (msg) {
                COLDIGO.exibirAviso(msg);
                COLDIGO.produto.buscar();
            },
            error: function (info) {
                COLDIGO.exibirAviso("Erro ao excluir produto: " + info.status + " - " + info.statusText);
            },
        });
    };

    // Carrega no BD os dados do produto selecionado para alteração e coloca-os no formulário de alteração
    COLDIGO.produto.exibirEdicao = function (id) {
        $.ajax({
            type: "GET",
            url: COLDIGO.PATH + "produto/buscarPorId",
            data: "id=" + id,
            success: function (produto) {
                document.frmEditaProduto.idProduto.value = produto.id;
                document.frmEditaProduto.modelo.value = produto.modelo;
                document.frmEditaProduto.capacidade.value = produto.capacidade;
                document.frmEditaProduto.valor.value = produto.valor;

                var selCategoria = document.getElementById("selCategoriaEdicao");
                for (var i = 0; i < selCategoria.length; i++) {
                    if (selCategoria.options[i].value == produto.categoria) {
                        selCategoria.options[i].setAttribute("selected", "selected");
                    } else {
                        selCategoria.options[i].removeAttribute("selected");
                    }
                }

                COLDIGO.produto.carregarMarcas(produto.marcaId);

                $("#modalEditaProduto").dialog({
                    title: "Editar Produto",
                    height: 400,
                    width: 550,
                    modal: true,
                    buttons: {
                        Salvar: function () {
                            COLDIGO.produto.editar();
                        },
                        Cancelar: function () {
                            $(this).dialog("close");
                        },
                    },
                });
            },
            error: function (info) {
                COLDIGO.exibirAviso("Erro ao buscar produto para edição: " + info.status + " - " + info.statusText);
            },
        });
    };

    // Realiza a edição dos dados no BD
    COLDIGO.produto.editar = function () {
        var produto = {
            id: document.frmEditaProduto.idProduto.value,
            categoria: document.frmEditaProduto.categoria.value,
            marcaId: document.frmEditaProduto.marcaId.value,
            modelo: document.frmEditaProduto.modelo.value,
            capacidade: document.frmEditaProduto.capacidade.value,
            valor: document.frmEditaProduto.valor.value,
        };

        $.ajax({
            type: "PUT",
            url: COLDIGO.PATH + "produto/alterar",
            data: JSON.stringify(produto),
            success: function (msg) {
                COLDIGO.exibirAviso(msg);
                COLDIGO.produto.buscar();
                $("#modalEditaProduto").dialog("close");
            },
            error: function (info) {
                COLDIGO.exibirAviso("Erro ao editar produto: " + info.status + " - " + info.statusText);
            },
        });
    };
});
