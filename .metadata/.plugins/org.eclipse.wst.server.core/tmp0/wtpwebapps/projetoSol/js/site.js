$(document).ready(function(){
	//carrega cabeçalho, menu e rodapé aos respectivos locais
	$("header").load("/projetoSol/pages/site/general/cabecalho.html");
	$("nav").load("/projetoSol/pages/site/general/menu.html");							
	$("footer").load("/projetoSol/pages/site/general/rodape.html");
	console.log("funcionouuuu"); 	 	
})

function validaFaleConosco() {

	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-Za-zÁ-ú]{3,}([ ]{1}[A-Za-zÁ-ú]{2,})?$");
	if (!expRegNome.test(nome)) {
		alert("Preencha o campo Nome.")
		document.frmfaleconosco.txtnome.focus();
		return false;
	}
	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if (!expRegFone.test(fone)) {
		alert("Preencha o campo Telefone corretamente.");
		document.frmfaleconosco.txtfone.focus();
		return false;
	}

	if (!document.getElementById('masculino').checked && !document.getElementById('feminino').checked) {
		alert('Por favor, selecione o gênero.');
		return false; // Impede o envio do formulário
	}
	var email = document.frmfaleconosco.txtemail.value;
	var expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!expRegEmail.test(email)) {
		alert("Preencha o campo Email corretamente.");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}


	var dataNascimento = document.getElementById('data-nascimento').value;
	var expRegData = new RegExp("^\\d{2}/\\d{2}/\\d{4}$");

	if (!expRegData.test(dataNascimento)) {


		alert("Preencha o campo Data de Nascimento.");
		document.getElementById('data-nascimento').focus();
		return false;
	}


	if (!document.getElementById('fan-clube').checked) {
		alert("Marque a opção para participar do fã-clube.");
		document.getElementById('fan-clube').focus();
		return false;
	}




	return true;
}

