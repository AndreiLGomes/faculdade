package modelo;

import java.text.DecimalFormat;
import java.util.ArrayList;

import modelo.Cupom;
import modelo.Produto;
import visualizacao.EntradaSaida;




public class Comercio {
	private ArrayList<Produto> listaDeProdutos = new ArrayList<Produto>();
	private ArrayList<Cupom> listaDeCupons = new ArrayList<Cupom>();
	DecimalFormat df = new DecimalFormat("#0.00");
	public ArrayList<Produto> getListaDeProdutos() {
		return listaDeProdutos;
	}

	public void setListaDeProdutos(ArrayList<Produto> listaDeProdutos) {
		this.listaDeProdutos = listaDeProdutos;
	}
	
	public boolean validaCodigo(int addCodigo) {
		for (int i = 0; i < listaDeProdutos.size(); i++) {
			Produto produto = listaDeProdutos.get(i);
			if (produto.getCodigo() == addCodigo) {
				return true;
			}
		}
		return false;
	}
	
	public void cadastrarProduto(Produto produto, int addCodigo) {
		listaDeProdutos.add(produto);
		EntradaSaida.exibirCadastroProduto();
	}
	
	public String verProdutosCadastrados() {

		String informacoes = "";

		for (Produto produto : this.listaDeProdutos) {

			informacoes += "Código: " + produto.getCodigo() + "\n" + "Descrição: " + produto.getDescricao() + "\n"
					+ "Preço: R$" + df.format(produto.getPreco()) + "\n" + "\n";

		}

		return informacoes;
	}
	public void retornaEstoque(int qntdeEstoque, int codigoEstoque) {

		for (int i = 0; i < listaDeProdutos.size(); i++) {

			Produto produto = listaDeProdutos.get(i);

			if (produto.getCodigo() == codigoEstoque) {
				produto.setQntde(produto.getQntde() + qntdeEstoque);
				EntradaSaida.exibirCadastroEstoque();

			}
		}

	}
	public Produto retornaProduto(int codigo) {

		Produto recebeProduto = null;

		for (int i = 0; i < listaDeProdutos.size(); i++) {

			Produto produto = listaDeProdutos.get(i);

			if (produto.getCodigo() == codigo) {

				recebeProduto = produto;

			}
		}

		return recebeProduto;

	}
	public void venderProduto(int codigo, int qntdeVendida) {

		boolean verificaRemocao = false;

		for (int i = 0; i < listaDeProdutos.size(); i++) {

			Produto produto = listaDeProdutos.get(i);

			if (produto.getCodigo() == codigo) {
				verificaRemocao = true;
				EntradaSaida.exibirVendaProduto(qntdeVendida, produto);
				int qntde = produto.getQntde() - qntdeVendida;
				produto.setQntde(qntde);

			}
		}

		if (verificaRemocao == false) {
			EntradaSaida.exibeMsgVenderProduto();
		}

	}
	public void gerarCupom(Cupom cupom) {

		listaDeCupons.add(cupom);
	}
}