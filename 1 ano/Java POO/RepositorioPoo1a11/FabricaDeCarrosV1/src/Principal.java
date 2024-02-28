import javax.swing.JOptionPane;

public class Principal {

	public static void main(String[] args) {
		String cor = "";
		String modelo = "";
		int ano = 0;
		int portas = 0;
		String continuar = "";
		
		do {
			cor = EntradaSaida.solicitarCor();
			modelo = EntradaSaida.solicitarModelo();
			ano = EntradaSaida.solicitarAno();
			portas = EntradaSaida.solicitarPortas();
			EntradaSaida.mostrarModelo(modelo, cor, ano, portas);
			continuar = JOptionPane.showInputDialog("vai ter mais carro para ser fabricado?");
		}while(continuar.equals("sim"));
	}

}
