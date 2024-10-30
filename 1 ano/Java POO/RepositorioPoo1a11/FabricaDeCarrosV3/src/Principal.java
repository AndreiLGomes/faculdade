import javax.swing.JOptionPane;

public class Principal {
	
	
	public static void main(String[] args) {
		Carro car = new Carro();
		
		String continuar = "";
		
		do {
			String cor = EntradaSaida.solicitarCor();
			String modelo = EntradaSaida.solicitarModelo();
			int ano = EntradaSaida.solicitarAno();
			int portas = EntradaSaida.solicitarPortas();
			car.setAno(ano);
			car.setCor(cor);
			car.setModelo(modelo);
			car.setPortas(portas);
			
			
			EntradaSaida.mostrarModelo(car.getCor(), car.getModelo(), car.getAno(), car.getPortas());
			
			cor = EntradaSaida.solicitarCor();
			modelo = EntradaSaida.solicitarModelo();
			ano = EntradaSaida.solicitarAno();
			portas = EntradaSaida.solicitarPortas();
			
			
			EntradaSaida.mostrarModelo(car.getCor(), car.getModelo(), car.getAno(), car.getPortas());
			
			continuar = JOptionPane.showInputDialog("vai ter mais carro para ser fabricado?");
		}while(continuar.equals("sim"));
	}

}
