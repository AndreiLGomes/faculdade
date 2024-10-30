package controle;

import java.util.ArrayList;

import javax.swing.JOptionPane;
import visualizacao.*;
import modelo.*;

public class Controladora {
	private Casa casa = null;
	public void exibeMenu() {
		int opcao;
		do {
			opcao = EntradaSaida.solicitaOpcao();
			switch(opcao) {
			case 0:
				this.casa = new Casa();

				String descricao = EntradaSaida.solicitarDescricao("casa",0);
				String cor = EntradaSaida.solicitarCor();
				int qtdePortas = EntradaSaida.solicitarQtdeAberturas("portas");
				int qtdeJanelas = EntradaSaida.solicitarQtdeAberturas("janelas");

				ArrayList<Aberturas> listaDePortas = new ArrayList<Aberturas>();

				for(int i=0; i<qtdePortas; i++) {
					Porta porta = new Porta();
					porta.setDescricao(EntradaSaida.solicitarDescricao("porta", (i+1)));
					porta.setEstado(EntradaSaida.solicitarEstado("porta"));
					listaDePortas.add(porta);
				}

				ArrayList<Aberturas> listaDeJanelas = new ArrayList<Aberturas>();

				for(int i=0; i<qtdeJanelas; i++) {
					Janela janela = new Janela();
					janela.setDescricao(EntradaSaida.solicitarDescricao("janela", (i+1)));
					janela.setEstado(EntradaSaida.solicitarEstado("janela"));
					listaDePortas.add(janela);
				}
				this.casa.constroiCasa(descricao, cor, listaDePortas, listaDeJanelas);

				System.out.println("descrição da casa"+ casa.getDescricao()+"\n");
				System.out.println("Cor da casa"+casa.getCor()+"\n");
				
				for(Aberturas portas : casa.getListaDePortas()) {
					System.out.println("Descrição da porta: "+portas.getDescricao()+"\n");
					System.out.println("Estado da porta: "+portas.getEstado());
				}
				
				for(Aberturas janela : casa.getListaDeJanelas()) {
					System.out.println("Descrição da janela: "+janela.getDescricao()+"\n");
					System.out.println("Estado da janela: "+janela.getEstado());
				}
				
				break;
			case 1:
				JOptionPane.showMessageDialog(null, "Movimentar portas ou janelas");
				break;
			case 2:
				JOptionPane.showMessageDialog(null, "Ver informações da casa");
				break;
			}
		}while(opcao!=3);
		EntradaSaida.exibeMsgEncerraPrograma();
		System.exit(0);
	}

}
