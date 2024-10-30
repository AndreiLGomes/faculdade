//Assim que o documento HTML fr carregado por completo...
$(document).ready(function() {
	console.log("aqui!!!");
	$("header").load("/ProjetoTrilhaWeb2/pages/site/general/cabecalho.html");
	$("nav").load("/ProjetoTrilhaWeb2/pages/site/general/menu.html");
	$("footer").load("/ProjetoTrilhaWeb2/pages/site/general/rodape.html");
	console.log("deu certo");
});



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
	if (document.frmfaleconosco.txtemail.value == "") {
		alert("Preencha o campo Email.")
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
	if (document.frmfaleconosco.selmotivo.value == "") {
		alert("Preencha o campo Motivo.")
		document.frmfaleconosco.selmotivo.focus();
		return false;
	}
	if (document.frmfaleconosco.txacomentario.value == "") {
		alert("Preencha o campo Comentario.")
		document.frmfaleconosco.txacomentario.focus();
		return false;
	}
	if (document.frmfaleconosco.selproduto.value == "") {
		alert("Preencha o campo Produto.")
		document.frmfaleconosco.selproduto.focus();
		return false;
	}
	return true;
}

function verificaMotivo(motivo) {

	//Capturamos a estrutura da div cujo ID é opcaoProduto na variável elemento
	var elemento = document.getElementById("opcaoProduto");
	//Se o valor da variável motivo for "PR"
	if (motivo == "PR") {
		//Criamos um elemento (tag)<select> e guardamos na variável homônima
		var select = document.createElement("select");
		//Setamos nesse novo select o atributo 'name' com o valor 'selproduto'	
		select.setAttribute("name", "selproduto");
		//Conteúdo atual da variável select:
		//<select name="selproduto"></select>

		//Criamos um elemento(tag)<option> e guardamos na variável homônima
		var option = document.createElement("option");
		//Setamos nesse novo option o atributo 'value' com o valor vazio
		option.setAttribute("value", "");
		//Criamos um nó de texto "Escolha" e gravamos na variável 'texto'
		var texto = document.createTextNode("Escolha");
		//Colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="">Escolha</option>;

		//Colocamos o option criado como "filho" da tah select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		//<select name="selproduto"><option value="">Escolha</option></select>

		//Criamos um elemento (tag)<option> e guardamos na variável homônima
		var option = document.createElement("option");
		//Setamos nesse novo option o atributo 'value' com o valor "FR"
		option.setAttribute("value", "FR");
		//criamos um nó de texto "Freezer" e gravamos na variável 'texto'
		var texto = document.createTextNode("Freezer");
		//colocamos o nó de texto criado como "filho" da tag option criada
		option.appendChild(texto);
		//conteúdo atual da variável option:
		//<option value="FR">Freezer</option>

		//colocamos o ption criado como "filho" da tag select criada
		select.appendChild(option);
		//Conteúdo atual da variável select:
		/*
		<select name="selproduto">
		<option value"">Escolha</option><option value="FR">Freezer</option>
		</select>
		*/

		//Criamos um elemento (tag)<option> e guardamos na variável homônima
		var option = document.createElement("option");
		//Setamos nesse novo option o atributo 'value' com o valor "GE"
		option.setAttribute("value", "GE");
		//Criamos um nó de texto "Geladeira" e gravamos na variável 'texto'
		var texto = document.createTextNode("Geladeira");
		//Colocamos o nó de texto criando como "filho" da tag option criada
		option.appendChild(texto);
		//Conteúdo atual da variável option:
		//<option value="GE">Geladeira</option>

		//Colocamos o option criado como "filho" da tag select criada
		select.appendChild(option);
		//conteúdo atual da variável select:
		/*
		<select name="selproduto">
		<option value="">Escolha</option><option value="FR">Freezer</option><option value="GE">Geladeira</option>
		</select>
		*/

		//colocamos o select criado como "filho" da tag div capturada no inicio da função
		elemento.appendChild(select);
		//Se o valor da variável motivo não for "PR"...
	} else {
		//Se a div possuir algum "primeiro filho"
		if (elemento.firstChild) {
			//removemos ele
			elemento.removeChild(elemento.firstChild);
		}
	}
}//fim da função verificaMotivo




