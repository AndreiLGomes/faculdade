package br.com.gcontato.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AdicionaContatoServlet extends HttpServlet{
	public AdicionaContatoServlet() {
		super();
	}
	
	protected void service(HttpServletRequest request,
			HttpServletResponse response)
	throws ServletException, IOException{	
		
		PrintWriter out = response.getWriter();
		String nome = request.getParameter("nome");
		String telefone = request.getParameter("telefone");
		String endereco = request.getParameter("endereco");
		out.println(nome);
		out.println(endereco);
		out.println(telefone);
	}
	
	
	
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response)
	throws ServletException, IOException{
		
	}
	
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response)
	throws ServletException, IOException{
		
	}
	
}
