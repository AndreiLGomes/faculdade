package br.com.coldigogeladeiras.rest;

import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;

import com.google.gson.Gson;

public class UtilRest {
	/*Abaixo o método responsável por enviar a resposta ao cliente sobre
	 * a transação realizada(inclusão, consulta, edição ou exclusão) caso
	 * ela seja realizada com sucesso.
	 * Repare que o método em questão aguarda que seja repassado um
	 * conteudo que será referenciado por um objeto chamado result.
	 */

	public Response buildResponse(Object result) {
		
		
		try {
			/*retorna o objeto de resposta com status 200, tendo
			 * em seu corpo o objeto valorResposta (que consiste no
			 * objeto result convertido para JSON).
			 */
			String valorResposta = new Gson().toJson(result);
			return Response.ok(valorResposta).build();
		} catch (Exception ex) {
			ex.printStackTrace();
			//se algo der errado acima, cria respose de erro
			return this.buildErrorResponse(ex.getMessage());
		}
	
	}
	/*Abaixo o método responsável por enviar a resposta ao cliente sobre
	 * A transação realizada, inclusão, consulta, edição ou exclusão.Ao
	 * cliente, não realizadas com sucesso, ou seja, que contenha algum
	 * erro.
	 * Repare que o método em questão aguarda que seja repassado um
	 * conteúdo que será referenciado pelo por um objeto chamado rb.
	 */
	public Response buildErrorResponse(String str) {
		//Abaixo o objeto rb recebe o status do erro.
		ResponseBuilder rb = Response.status(Response.Status.INTERNAL_SERVER_ERROR);
		/*define a entidade(objeto), que nesse caso é uma
		 * mensagem que será retornado para o cliente.
		 */
		rb = rb.entity(str);
		/*define o tipo de retorno desta entidade(objeto), no
		 * caso é definido com texto simples.
		 */
		rb = rb.type("text/plain");
		
		/*
		 * retorna o objeto de resposta com status 500.
		 * junto com a String contendo a mensagem de erro
		 */
		return rb.build();
	}
	
}