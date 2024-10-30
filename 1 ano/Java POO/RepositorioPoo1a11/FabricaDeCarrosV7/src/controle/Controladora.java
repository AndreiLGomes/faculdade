package controle;

import javax.swing.JOptionPane;
import modelo.*;
import visualizacao.*;

import visualizacao.EntradaSaida;

public class Controladora {
	public void exibeMenu() {

		CarroEsportivo carroEsportivo = new CarroEsportivo();
		Carro carroPopular = new Carro();
		// Carro car = new Carro();
		// Carro car2 = new Carro();
		String continuar = "";
		do {
			int opcao;
			opcao = EntradaSaida.selecionarMenu();
			int tipoCarro = EntradaSaida.solicitarTipo();

			switch (opcao) {
			case 0:

				switch (tipoCarro) {
				case 0:

					String potencia = EntradaSaida.solicitarPotencia();
					carroEsportivo.setPotencia(potencia);

					break;
				case 1:
					String marcha = EntradaSaida.solicitarMarcha();
					carroPopular.setMarchaManual(marcha);
					break;

				default:
					JOptionPane.showMessageDialog(null, "Operação inválida! !");
					System.exit(0);
				}
				String cor = EntradaSaida.solicitarCor();
				String modelo = EntradaSaida.solicitarModelo();
				int ano = EntradaSaida.solicitarAno();
				int portas = EntradaSaida.solicitarPortas();

				carroPopular.setAno(ano);
				carroPopular.setCor(cor);
				carroPopular.setModelo(modelo);
				carroPopular.setPortas(portas);
				carroEsportivo.setAno(ano);
				carroEsportivo.setCor(cor);
				carroEsportivo.setModelo(modelo);
				carroEsportivo.setPortas(portas);
				continuar = "sim";
				break;
				
			case 1:

				if (tipoCarro == 1) {
					EntradaSaida.mostrarModelo(carroPopular.getCor(), carroPopular.getModelo(), carroPopular.getAno(),
							carroPopular.getPortas(), carroPopular.getMarchaManual());
				} else {
					EntradaSaida.mostrarModelo(carroEsportivo.getCor(), carroEsportivo.getModelo(),
							carroEsportivo.getAno(), carroEsportivo.getPortas(), carroEsportivo.getPotencia());
				}
				continuar = "sim";
				break;
			case 2:
				continuar = "nao";
				break;
			}

		} while (continuar.equals("sim"));
	}
}
