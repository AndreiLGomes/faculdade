package controle;

import java.util.ArrayList;

import javax.swing.JOptionPane;
import visualizacao.*;
import modelo.*;

public class Controladora {
	private Casa casa = null;
	public void exibeMenu() {
		int opcao;
		int teste=0;
		boolean casaFeita = false;
		
		
		do {
			opcao = EntradaSaida.solicitaOpcao();
			switch(opcao) {
			case 0:
				this.casa = new Casa();

				String descricao = EntradaSaida.solicitarDescricao("casa",0);
				String cor = EntradaSaida.solicitarCor();
				
				int qtdePortas = EntradaSaida.solicitarQtdeAberturas("portas");
				while(qtdePortas <=0) {
					qtdePortas = EntradaSaida.solicitarQtdeAberturas("portas");
				}
				int qtdeJanelas = EntradaSaida.solicitarQtdeAberturas("janelas");
				while(qtdeJanelas <=0) {
					qtdeJanelas = EntradaSaida.solicitarQtdeAberturas("janelas");
				}

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
					listaDeJanelas.add(janela);
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
				teste=1;
				casaFeita = true;
				break;
			case 1:
				if(casaFeita) {


					String tipoAbertura = EntradaSaida.solicitarTipoAbertura();

					ArrayList<Aberturas> listaDeAberturas = new ArrayList<Aberturas>();

					if(tipoAbertura.equals("porta")) {
						listaDeAberturas = this.casa.getListaDePortas();
					}else {
						listaDeAberturas = this.casa.getListaDeJanelas();
					}

					int posicao = EntradaSaida.solicitarAberturaMover(listaDeAberturas);
					int novoEstado = 0;

					if(posicao != 1) {
						novoEstado = EntradaSaida.solicitarEstado(tipoAbertura);
						Aberturas abertura = this.casa.retornaAbertura(posicao, tipoAbertura);
						this.casa.moverAbertura(abertura, novoEstado);
						System.out.println("novo estado da "+tipoAbertura+": "+abertura.getEstado());
					}else {
						EntradaSaida.exibeMsgAbertura();
					}
				}else {
					EntradaSaida.msgNao();
				}
				break;


			case 2:
				if(casaFeita) {
					String informacoes=this.casa.geraInfoCasa();
					JOptionPane.showMessageDialog(null, "Ver informações da casa");
					EntradaSaida.exibirInfoCasa(informacoes);
					EntradaSaida.msgNao();
					
				}else {
					EntradaSaida.msgNao();
				}
				break;
			}
		}while(opcao!=3);
		EntradaSaida.exibeMsgEncerraPrograma();
		System.exit(0);
	}

}
