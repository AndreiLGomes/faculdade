import javax.swing.JOptionPane;

public class Principal {
	
	private static Carro car = new Carro();
	private static Carro car2 = new Carro();
	
	public static void main(String[] args) {
		
		String continuar = "";
		
		do {
			String cor = EntradaSaida.solicitarCor();
			String modelo = EntradaSaida.solicitarModelo();
			int ano = EntradaSaida.solicitarAno();
			int portas = EntradaSaida.solicitarPortas();
			
			
			
			EntradaSaida.mostrarModelo(car.carroModelo(modelo), car.carroCor(cor), 
					car.carroAno(ano), car.carroPortas(portas));
			
			cor = EntradaSaida.solicitarCor();
			modelo = EntradaSaida.solicitarModelo();
			ano = EntradaSaida.solicitarAno();
			portas = EntradaSaida.solicitarPortas();
			
			EntradaSaida.mostrarModelo(car2.carroModelo(modelo), car2.carroCor(cor),
					car2.carroAno(ano), car2.carroPortas(portas));
			
			continuar = JOptionPane.showInputDialog("vai ter mais carro para ser fabricado?");
		}while(continuar.equals("sim"));
	}

}
