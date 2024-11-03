package br.com.coldigogeladeiras.jdbc;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import br.com.coldigogeladeiras.jdbcinterface.MarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;

public class JDBCMarcaDAO implements MarcaDAO {
	private Connection conexao;

	public JDBCMarcaDAO (Connection conexao) { 
		this.conexao = conexao;  
		}
	public List<Marca> buscar(){
		
		String comando = "SELECT * FROM marcas";
		System.out.println(comando);
		List<Marca> listMarcas = new ArrayList<Marca>();
		
		Marca marca = null;
		
		try {
			
			//uso da conexao do banco para prepará-lo para uma instrução SQL
			Statement stmt = conexao.createStatement();
			
			//Execução da instrução criada previamente
			//e armazenamento do resultado no objeto rs
			ResultSet rs = stmt.executeQuery(comando);
			
			//enquanto houver uma próximo linha no resultado
			while(rs.next()) {
				//criação de instância da classe Marca
				marca = new Marca();
				
				//recebimento dos 2 dados retornados do BD para cada linha encontrada
				 int id = rs.getInt("id");
				String nome = rs.getString("nome");
				System.out.println(id);
				System.out.println(nome);
				
				//Setando no objeto marca os valores encontrados
				marca.setId(id);
				marca.setNome(nome);
				
				//adição da instância contida no objeto Marca na lista de marcas
				listMarcas.add(marca);
			}
			
			
			//caso alguma Exception seja gerada no try, recebe-a no objeto 'ex'
		} catch (Exception ex) {
			//exibe a exceção na console
			ex.printStackTrace();
		}
		
		//Retorna para quem chamou o método a lista criada
		return listMarcas;
	}
}




