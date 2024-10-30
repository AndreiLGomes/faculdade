package controle;

import visualizacao.EntradaSaida;
import modelo.*;

import java.time.LocalDateTime;


public class Controladora {
	Comercio comercio = new Comercio();
	public void exibeMenu() {
		int opcao;
		do {
			opcao = EntradaSaida.solicitaOpcao();
			switch(opcao) {
				case 0:
					Produto produto = new Produto();
					int addCodigo = EntradaSaida.solicitarCodigo();
					
					while (this.comercio.validaCodigo(addCodigo)) {
						EntradaSaida.exibeMsgCodigoDuplicado();
						addCodigo = EntradaSaida.solicitarCodigo();
					}
					
					produto.setCodigo(addCodigo);
					produto.setDescricao(EntradaSaida.solicitarDescricao());
					produto.setPreco(EntradaSaida.solicitarPreco());
					produto.setQntde(0);
					this.comercio.cadastrarProduto(produto, addCodigo);
					break;
				case 1:
					if (comercio.getListaDeProdutos().isEmpty()) {

						EntradaSaida.exibeMsgSemCadastro();

					}else {

						String informacoes = this.comercio.verProdutosCadastrados();
						EntradaSaida.exibirProdutosCadastrados(informacoes);
					}
					break;
				case 2:
					if (comercio.getListaDeProdutos().isEmpty()) {

						EntradaSaida.exibeMsgSemEstoque();

					}else {

						int codigoEstoque = EntradaSaida.solicitarCodigo();
						while (!this.comercio.validaCodigo(codigoEstoque)) {
							EntradaSaida.exibeMsgCodigoNaoExiste();
							codigoEstoque = EntradaSaida.solicitarCodigo();
						}
						int qntdeEstoque = EntradaSaida.solicitarQtdeProdutos();
						this.comercio.retornaEstoque(qntdeEstoque, codigoEstoque);
					}
					break;
				case 3:
					if (comercio.getListaDeProdutos().isEmpty()) {

						EntradaSaida.exibeMsgSemCadastroVenda();

					} else {

						int codigo = EntradaSaida.solicitarCodigo();
						int qntdeVendida = EntradaSaida.solicitarQtdeProdutos();
						Produto produto2 = this.comercio.retornaProduto(codigo);
						if (produto2.getQntde() - qntdeVendida < 0) {
							EntradaSaida.exibeMsgEstoqueZerado();
						} else {
							this.comercio.venderProduto(codigo, qntdeVendida);
							Cupom cupom = new Cupom();
							cupom.setDataVenda(LocalDateTime.now());
							cupom.setDescricao(produto2.getDescricao());
							cupom.setQntde(qntdeVendida);
							cupom.setPreco(produto2.getPreco());
							cupom.setValorTotal(produto2.getPreco() * qntdeVendida);
							this.comercio.gerarCupom(cupom);

						}
					}
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
			}
			
		}while(opcao != 7);
	}
	
}
