package br.com.coldigogeladeiras.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.JsonObject;

import br.com.coldigogeladeiras.jdbcinterface.MarcaDAO;
import br.com.coldigogeladeiras.modelo.Marca;
import br.com.coldigogeladeiras.modelo.Produto;

public class JDBCMarcaDAO implements MarcaDAO {
	private Connection conexao;

	public JDBCMarcaDAO (Connection conexao) { 
		this.conexao = conexao;  
		}
	
	
	public boolean alterar(Marca marca) {

	    String comando = "UPDATE marcas "
	        + "SET nome=?"
	        + " WHERE id=?";

	    PreparedStatement p;
	    try {
	        p = this.conexao.prepareStatement(comando);
	        p.setString(1, marca.getNome());
	        p.setInt(2, marca.getId());
	        p.executeUpdate();
	        
	        
	        
	    } catch (SQLException e) {
	        e.printStackTrace();
	        return false;
	    }
	    return true;
	}
	public boolean deletar(int id) {
	    String comando = "DELETE FROM marcas WHERE id = ?";
	    PreparedStatement p;
	    try {
	        p = this.conexao.prepareStatement(comando);
	        p.setInt(1, id);
	        p.execute();
	    } catch (SQLException e) {
	        e.printStackTrace();
	        return false;
	    }
	    return true;
	}
	
	public List<JsonObject> buscarPorNome(String nome) {

	    // Inicia criação do comando SQL de busca
		String comando = "SELECT * FROM marcas";

		// Se o nome não estiver vazio...
		if (!nome.equals("")) {
		    // Adiciona uma cláusula WHERE para filtrar pelo nome da marca
		    comando += " WHERE nome LIKE '%" + nome + "%'";
		}

		// Finaliza o comando ordenando alfabeticamente pelo nome da marca
		comando += " ORDER BY nome ASC";
	    List<JsonObject> listaMarcas = new ArrayList<JsonObject>();
	    JsonObject marca = null;

	    try {
	        // Insira aqui a lógica para manipular os dados de produtos
	    	 Statement stmt = conexao.createStatement();
	    	 ResultSet rs = stmt.executeQuery(comando);

	    	 while (rs.next()) {
	    		 // Insira aqui a lógica para processar cada linha do ResultSet
	    		 int id = rs.getInt("id");
	    		 String nomee = rs.getString("nome");
	    		 

	    		
	    		 marca = new JsonObject();
	    		 marca.addProperty("id", id);
	    		 marca.addProperty("nome", nomee);
	    	

	    		 listaMarcas.add(marca);

	    	 }
	    } catch (Exception e) {
	        e.printStackTrace();
	    }

	    return listaMarcas;

	}
	
	public boolean inserir(Marca marca) {
		String comando = "INSERT INTO marcas "
			+ "(id, nome) "
			+ "VALUES (?, ?)";
		
		PreparedStatement p;
		
		try {
			//prepara o comando para execução no BD em que nos conectamos
			p = this.conexao.prepareStatement(comando);
			
			//substitui no comando os "?" pelos valores do produto
			p.setInt(1, marca.getId());
			p.setString(2, marca.getNome());
			
			
			//executa o comando no BD
			
			p.execute();
		}catch(SQLException e) {
			e.printStackTrace();
			return false;
		}
		return true;
	}
	
	public Marca buscarPorId(int id) {
	    String comando = "SELECT * FROM marcas WHERE marcas.id = ?";
	    Marca marca = new Marca();
	    try {
	        PreparedStatement p = this.conexao.prepareStatement(comando);
	        p.setInt(1, id);
	        ResultSet rs = p.executeQuery();
	        while (rs.next()) {
	            // Lógica para preencher o objeto produto com os dados do ResultSet
	        	String nome = rs.getString("nome");
	        	;

	        	marca.setId(id);
	        	marca.setNome(nome);
	        	
	            System.out.println("Marca encontrada: ID = " + marca.getId() + ", Nome = " + marca.getNome());


	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return marca;
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




