import javax.swing.JOptionPane;

public class Principal {
	
	
	public static void main(String[] args) {
		
		CarroEsportivo carroEsportivo = new CarroEsportivo();
		Carro carroPopular = new Carro();
		//Carro car = new Carro();
		//Carro car2 = new Carro();
		String continuar = "";
		int tipoCarro = EntradaSaida.solicitarTipo();
		
		do {
			switch(tipoCarro) {
			case 1:
				
				String potencia = EntradaSaida.solicitarPotencia();
				carroEsportivo.setPotencia(potencia); 
				
				break;
			case 2:
				String marcha = EntradaSaida.solicitarMarcha();
				carroPopular.setMarchaManual(marcha);
				break;
			
				
			default:
				JOptionPane.showMessageDialog(null, "Operação inválida! A calculado será encerrada!");
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
				
			if(tipoCarro == 2) {
				EntradaSaida.mostrarModelo(carroPopular.getCor(), carroPopular.getModelo(), carroPopular.getAno(), carroPopular.getPortas(), carroPopular.getMarchaManual());
			}else {
				EntradaSaida.mostrarModelo(carroEsportivo.getCor(), carroEsportivo.getModelo(), carroEsportivo.getAno(), carroEsportivo.getPortas(), carroEsportivo.getPotencia());
			}
			
			
			
			
			
			continuar = JOptionPane.showInputDialog("vai ter mais carro para ser fabricado?");
		}while(continuar.equals("sim"));
	}

}
