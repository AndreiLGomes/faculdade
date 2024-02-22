package modelo;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Cupom {

	private String descricao;
	private int qntde;
	double valorTotal;
	double preco;
	LocalDateTime dataVenda = LocalDateTime.now();
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

	public String getDataVenda() {
		return dataVenda.format(formatter);
	}

	public void setDataVenda(LocalDateTime dataVenda) {
		this.dataVenda = dataVenda;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getQntde() {
		return qntde;
	}

	public void setQntde(int qntde) {
		this.qntde = qntde;
	}

	public double getValorTotal() {
		return valorTotal;
	}

	public void setValorTotal(double valorTotal) {
		this.valorTotal = valorTotal;
	}
	
	public double getPreco() {
		return preco;
	}
	
	public void setPreco(double preco) {
		this.preco = preco;
	}

}
