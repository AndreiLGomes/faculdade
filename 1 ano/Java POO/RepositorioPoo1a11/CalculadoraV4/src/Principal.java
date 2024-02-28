import javax.swing.JOptionPane;

public class Principal {
	
	
	public static void main(String[] args) {
		
		int continuar;
		double resultado=0;
		do {
			double num1 = EntradaSaida.solicitaNumero("1°");
			double num2 =  EntradaSaida.solicitaNumero("2°");
			int operacao = EntradaSaida.solicitaOperacao();
			
			switch(operacao) {
				case 1:
					Soma soma = new Soma();
					soma.setNum1(num1);
					soma.setNum2(num2);
					resultado=soma.calculaSoma();
					break;
				case 2:
					Subtracao subtracao = new Subtracao();
					subtracao.setNum1(num1);
					subtracao.setNum2(num2);
					resultado=subtracao.calculaSubtracao();
					break;
				case 3:
					Multiplicacao multiplicacao = new Multiplicacao();
					multiplicacao.setNum1(num1);
					multiplicacao.setNum2(num2);
					resultado=multiplicacao.calculaMultiplicacao();
					break;
				case 4:
					while(num2==0) {
						num2=EntradaSaida.solicitaNumero("2°");
					}
					Divisao divisao = new Divisao();
					divisao.setNum1(num1);
					divisao.setNum2(num2);
					resultado=divisao.calculaDivisao();
					break;
				default:
					JOptionPane.showMessageDialog(null, "Operação inválida! A calculado será encerrada!");
					System.exit(0);
			}
			EntradaSaida.mostraResultado(resultado, operacao);
			continuar = Integer.parseInt(JOptionPane.showInputDialog(""
					+ "Deseja continuar calculando? 1-Sim | 2- Não"));
		}while(continuar==1);

	}
	
	
	


}
