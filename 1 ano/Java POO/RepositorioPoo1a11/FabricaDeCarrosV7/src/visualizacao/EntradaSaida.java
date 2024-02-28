package visualizacao;
import javax.swing.JComboBox;
import javax.swing.JOptionPane;

public class EntradaSaida {
	public static String solicitarCor() {
		String cor = "";
		do {
			cor = JOptionPane.showInputDialog("digita qual vai ser o cor do carro \n"
					+ "azul\n"
					+ "preto\n"
					+ "vermelho");
		}while(!cor.equals("azul")&& !cor.equals("preto")&& !cor.equals("vermelho"));
		return cor;
	}

	public static String solicitarModelo() {
		String modelo ="";
		do {
			modelo = JOptionPane.showInputDialog("digita qual vai ser o modelo do carro \n"
					+ "duster\n"
					+ "sandero\n"
					+ "kwid");
		}while(!modelo.equals("duster")&& !modelo.equals("sandero")&& !modelo.equals("kwid"));
		return modelo;
	}

	public static int solicitarAno() {
		int ano = 0;
		do {
			ano = Integer.parseInt(JOptionPane.showInputDialog("ano do carro? 2023 ou 2024"));
		}while(ano != 2023 && ano != 2024);
		return ano;
	}

	public static int solicitarPortas() {
		int portas = 0;
		do {
			portas = Integer.parseInt(JOptionPane.showInputDialog("qual portas o carro vai ser? 2 ou 4"));
		}while(portas != 2 && portas !=4);
		return portas;
	}

	public static void mostrarModelo(String modelo, String cor, int ano, int portas, String diferencial ) {
		JOptionPane.showMessageDialog(null, "O modelo do carro que vai ser fabricado!\n"
				+ "Modelo: "+modelo+"\n"
				+ "Cor: "+cor+"\n"
				+ "Ano: "+ano+"\n"
				+ "Portas: "+portas+"\n"
				+ diferencial);
	}
	public static int solicitarTipo() {
		String[] carroTipo = {"carro luxuoso","carro comum"};
		JComboBox<String> menu = new JComboBox<String>(carroTipo);
		JOptionPane.showConfirmDialog(null, menu, "Selecione a opção desejada",
				JOptionPane.OK_CANCEL_OPTION);
		
		return menu.getSelectedIndex();
	}
	public static String solicitarPotencia() {
		String potencia = "";
		do {
			potencia = JOptionPane.showInputDialog("digita qual vai ser a potencia do carro \n"
					+ "1600cv\n"
					+ "2000cv\n"
					+ "3000cv");
		}while(!potencia.equals("1600cv")&& !potencia.equals("2000cv")&& !potencia.equals("3000cv"));
		
		return "cavalos: "+ potencia;
	}
	public static String solicitarMarcha() {
		String marcha = "";
		do {
			marcha = JOptionPane.showInputDialog("qual marcha o carro vai ter? \n"
					+ "manual\n"
					+ "automatica\n");
		}while(!marcha.equals("manual")&& !marcha.equals("automatica"));
		return "marcha: "+marcha;
	}
	public static int selecionarMenu() {
		String[] selecionar = {"Fabricar o Carro","Mostrar o Carro","Sair do Programa"};
		JComboBox<String> menu = new JComboBox<String>(selecionar);
		JOptionPane.showConfirmDialog(null, menu, "Selecione a opção desejada",
				JOptionPane.OK_CANCEL_OPTION);
		
		return menu.getSelectedIndex();
	}
	public static int retornarNumero(int numero) {
		
		return numero;
	}
	

}
