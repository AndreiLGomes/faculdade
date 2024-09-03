// 1
function classificarIdade(idade) {
  if (idade < 13) {
    console.log("Criança");
  } else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
  } else if (idade >= 18 && idade <= 64) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}
classificarIdade(10);
classificarIdade(15);
classificarIdade(30);
classificarIdade(70);
// 2
function jogoAdivinhacao(numeroEscolhido) {
  const numeroCorreto = 3;

  switch (numeroEscolhido) {
    case 1:
    case 2:
    case 4:
    case 5:
      console.log("Você errou! Tente novamente.");
      break;
    case 3:
      console.log("Parabéns! Você acertou!");
      break;
    default:
      console.log("Número fora do intervalo permitido (1 a 5).");
      break;
  }
}
jogoAdivinhacao(1);
jogoAdivinhacao(3);
jogoAdivinhacao(6);
// 3
function avaliarNota(nota) {
  switch (true) {
    case nota < 6:
      console.log("Reprovado");
      break;
    case nota >= 6 && nota <= 7:
      console.log("Recuperação");
      break;
    case nota > 7:
      console.log("Aprovado");
      break;
    default:
      console.log("Nota inválida");
      break;
  }
}

avaliarNota(4.5);
avaliarNota(6.5);
avaliarNota(8);
