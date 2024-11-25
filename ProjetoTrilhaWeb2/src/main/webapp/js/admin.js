COLDIGO = new Object();
$(document).ready(function() {
	//criar uma constante com o valor da URL raiz do REST
	COLDIGO.PATH = "/ProjetoTrilhaWeb2/rest/"
	
	$("header").load("/ProjetoTrilhaWeb2/pages/admin/general/header.html");
	
	$("footer").load("/ProjetoTrilhaWeb2/pages/admin/general/footer.html");
	console.log("deu certo");
	
	
	
	//função para carregamento de paginas de conteúdo, que
	//recebe como parametro o nome da pasta com a página a ser carregada
	COLDIGO.carregaPagina = function(pagename){
		//limpa a tag section, excluindo todo o conteúdo
		if ($(".ui-dialog"))
    		$(".ui-dialog").remove();

		$("section").empty();
		//Carrega a página solicitada dentro da tag section
		$("section").load(pagename+"/", function(response, status, info){
			if (status == "error"){
				var msg = "Houve um erro ao encontrar a página"+ info.status +" - "+ info.statusText;
				$("section").html(msg);
			}
		});
	}
	//define as configurações base de uma modal de aviso
	COLDIGO.exibirAviso = function(aviso){
		var modal = {
			title: "Mensagem",
			height:250,
			width:400,
			modal:true,
			buttons:{
				"OK": function(){
					$(this).dialog("close");
				}
			}
		};
		$("#modalAviso").html(aviso);
		$("#modalAviso").dialog(modal); 
	};
	// Exibe os valores financeiros no formato da moeda Real
	COLDIGO.formatarDinheiro = function(valor) {
   		return valor.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, "$1.");
}

});