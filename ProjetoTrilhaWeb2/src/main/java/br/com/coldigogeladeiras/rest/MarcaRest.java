package br.com.coldigogeladeiras.rest;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import br.com.coldigogeladeiras.bd.Conexao;
import br.com.coldigogeladeiras.jdbc.JDBCMarcaDAO;
import br.com.coldigogeladeiras.jdbc.JDBCProdutoDAO;
import br.com.coldigogeladeiras.modelo.Marca;
import br.com.coldigogeladeiras.modelo.Produto;

@Path("marca")
public class MarcaRest extends UtilRest{
	
	@POST
	@Path("/inserir")
	@Consumes("application/*")
	
	public Response inserir(String marcaParam) {
		try {
			
			Marca marca = new Gson().fromJson(marcaParam, Marca.class);
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			
			JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
			boolean retorno = jdbcMarca.inserir(marca);
			String msg = "";
			
			if(retorno) {
				msg = "Marca cadastrado com sucesso!";
			}else {
				msg = "Erro ao cadastrar marca.";
			}
			conec.fecharConexao();
			
			return this.buildResponse(msg);
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
	
	}
	
	
	@GET
	@Path("/buscarr")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscar() {
		
		
		try {
			
			List<Marca> listaMarcas = new ArrayList<Marca>();
			
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
			listaMarcas = jdbcMarca.buscar();
			for(Marca list : listaMarcas) {
				System.out.println(list.getId() + list.getNome());
			}
			conec.fecharConexao();
			return this.buildResponse(listaMarcas);
		}catch(Exception e) {
			e.printStackTrace();
			return this.buildErrorResponse(e.getMessage());
		}
		
	}
	
	@GET
	@Path("/buscar")
	@Consumes("application/*")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarPorNome(@QueryParam("valorBusca") String nome){
	    // Insira aqui a lógica para buscar o nome
		try{
		    // Insira aqui o código que pode lançar exceções
			List<JsonObject> listaMarcas = new ArrayList<JsonObject>();
			
			Conexao conec = new Conexao();
			Connection conexao = conec.abrirConexao();
			JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
			
			listaMarcas = jdbcMarca.buscarPorNome(nome);
			conec.fecharConexao();

			String json = new Gson().toJson(listaMarcas);
			return this.buildResponse(json);

		}catch(Exception e){
		    e.printStackTrace();
		    return this.buildErrorResponse(e.getMessage());
		}
		

	}
	
	
	@PUT
	@Path("/alterar")
	@Consumes("application/*")
	public Response alterar(String marcaParam){
		try {
	        Marca marca = new Gson().fromJson(marcaParam, Marca.class);
	        Conexao conec = new Conexao();
	        Connection conexao = conec.abrirConexao();
	        JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
	        
	        boolean retorno = jdbcMarca.alterar(marca);

	        

	        String msg = "";
	        if (retorno){
	            msg = "marca alterado com sucesso!";
	        } else {
	            msg = "Erro ao alterar marca.";
	        }

	        conec.fecharConexao();
	        return this.buildResponse(msg);

	    } catch(Exception e) {
	        e.printStackTrace();
	        return this.buildErrorResponse(e.getMessage());
	    }
	}

	
	
	@DELETE
	@Path("/excluir/{id}")
	@Consumes("application/*")
	public Response excluir(@PathParam("id") int id){
	    
		try{
		    Conexao conec = new Conexao();
		    Connection conexao = conec.abrirConexao();
		    JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);
		    
		    boolean retorno = jdbcMarca.deletar(id);
		    String msg = "";
		    if(retorno){
		        msg = "Marca excluído com sucesso!";
		    }else{
		        msg = "Erro ao excluir marca.";
		    }

		    conec.fecharConexao();

		    return this.buildResponse(msg);

		    
		}catch(Exception e){
		    e.printStackTrace();
		    return this.buildErrorResponse(e.getMessage());
		}

		
	}
	
	
	@GET
	@Path("/buscarPorId")
	@Consumes("application/*")
	@Produces(MediaType.APPLICATION_JSON)
	public Response buscarPorId(@QueryParam("id") int id){

		

	    try{
	        // Lógica para buscar o produto pelo id
	    	Marca marca = new Marca();
	    	Conexao conec = new Conexao();
	    	Connection conexao = conec.abrirConexao();
	    	JDBCMarcaDAO jdbcMarca = new JDBCMarcaDAO(conexao);

	    	marca = jdbcMarca.buscarPorId(id);
	    	
	    	
	    	conec.fecharConexao();

	    	return this.buildResponse(marca);

	    }catch(Exception e){
	        e.printStackTrace();
	        return this.buildErrorResponse(e.getMessage());
	    }
	}
}

