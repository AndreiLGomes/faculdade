COLDIGO.produto = new Object();

$(document).ready(function(){
	
	
	//carrega as marcas registradas no BD no select do formulario de inserir
	COLDIGO.produto.carregarMarcas = function(){
		
		$.ajax({
			type:"GET",
			url: COLDIGO.PATH + "marca/buscar",
			success: function (marcas){
				
				if(marcas!=""){
					$("#selMarca").html("");
					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Escolha");
					$("#selMarca").append(option);
					
					for(var i=0; i < marcas.length; i++){
						console.log(marcas[i].id +"-"+ marcas[i].nome);
						
						var option = document.createElement("option");
						option.setAttribute("value", marcas[i].id);
						option.innerHTML = (marcas[i].nome);
						$("#selMarca").append(option);
					}
				}else{
					
					$("#selMarca").html("");
					
					var option = document.createElement("option");
					option.setAttribute("value", "");
					option.innerHTML = ("Cadastre uma marca primeiro!");
					$("#selMarca").append(option);
					$("#selMarca").addClass("aviso");
				}
			},
			error: function(info){
				COLDIGO.exibirAviso("Erro ao buscar as marcas "+ info.status +" - "+ info.statusText);
				
				$("#selMarca").html("");
				var option = document.createElement("option");
				option.setAttribute("value", "");
				option.innerHTML = ("Erro ao carregar marcas!")
				$("#selMarca").append(option);
				$("#selMarca").addClass("aviso");
			},
		});
	}
	
	COLDIGO.produto.carregarMarcas();
	
	//	cadastra no BD o produto informado
	COLDIGO.produto.cadastrar = function(){
		
		var produto = new Object();
		
		produto.categoria = document.frmAddProduto.categoria.value;
		produto.marcaId = document.frmAddProduto.marcaId.value;
		produto.modelo = document.frmAddProduto.modelo.value;
		produto.capacidade = document.frmAddProduto.capacidade.value;
		produto.valor = document.frmAddProduto.valor.value;
		console.log("aqui o produto"+produto);
		
		if((produto.categoria=="")||(produto.marcaId=="")||(produto.modelo=="")
		|| (produto.capacidade=="")||(produto.valor=="")){
			COLDIGO.exibirAviso("Preencha todos os campos!");
		}else{
			$.ajax({
				type: "POST",
				url: COLDIGO.PATH + "produto/inserir",
				data:JSON.stringify(produto),
				success: function(msg){
					COLDIGO.exibirAviso(msg);
					$("#addProduto").trigger("reset");
				},
				error: function (info){
					COLDIGO.exibirAviso("Erro ao cadastrar um novo produto: "+ info.status+" - "+ info.statusText);
					
				}
			});
		}
	}
	
//Budcar no BD e exibe na página os produtos que atendam a solicitação do usuário
COLDIGO.produto.buscar = function(){
	var valorBusca = $("#campoBuscaProduto").val();
	$.ajax({
    type: "GET",
    url: COLDIGO.PATH + "produto/buscar",
    data: "valorBusca=" + valorBusca,
    success: function(dados){
        // Insira aqui a lógica para lidar com os dados recebidos
       dados = JSON.parse(dados);
       $("#listaProdutos").html(COLDIGO.produto.exibir(dados));

    },
    error: function(info){
        COLDIGO.exibirAviso("Erro ao consultar os contatos: " + info.status + " - " + info.statusText);
    }
});
COLDIGO.produto.exibir = function(listaDeProdutos) {
		var tabela = "<table>" +
	    "<tr>" +
	    "<th>Categoria</th>" +
	    "<th>Marca</th>" +
	    "<th>Modelo</th>" +
	    "<th>Cap.(l)</th>" +
	    "<th>Valor</th>" +
	    "<th class='acoes'>Ações</th>" +
	    "</tr>";
	if (listaDeProdutos != undefined && listaDeProdutos.length > 0) {
		for (var i = 0; i < listaDeProdutos.length; i++) {
		    tabela += "<tr>" +
		        "<td>" + listaDeProdutos[i].categoria + "</td>" +
		        "<td>" + listaDeProdutos[i].marcaNome + "</td>" +
		        "<td>" + listaDeProdutos[i].modelo + "</td>" +
		        "<td>" + listaDeProdutos[i].capacidade + "</td>" +
		       "<td>R$ " + COLDIGO.formatarDinheiro(listaDeProdutos[i].valor) + "</td>" +
		        "<td>" +
		            "<a><img src='../../img/edit.png' alt='Editar registro'></a> " +
		            "<a><img src='../../img/delete.png' alt='Excluir registro'></a>" +
		        "</td>" +
		    "</tr>";
		}

		} else if (listaDeProdutos == "") {
		    tabela += "<tr><td colspan='6'>Nenhum registro encontrado</td></tr>";
		}
		tabela += "</table>";
		
	return tabela;


	};
};
//executa a funcção de buscar ao carregar a página
COLDIGO.produto.buscar();
});