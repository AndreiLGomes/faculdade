package modelo;

public class Produto {
	
	private int codigo;
	private String descricao;
	private double preco;
	private int qntde;
	
	public int getCodigo() {
		return codigo;
	}
	
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	public double getPreco() {
		return preco;
	}
	
	public void setPreco(double preco) {
		this.preco = preco;
	}
	
	public int getQntde() {
		return qntde;
	}
	
	public void setQntde(int qntde) {
		this.qntde = qntde;
	}
}
