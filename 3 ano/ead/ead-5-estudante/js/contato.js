// Botão de navegação para voltar
document.addEventListener("DOMContentLoaded", () => {
  const btnVoltar = document.getElementById("navigateBtn");
  const btnSobre = document.getElementById("navigateSobre");

  const form = document.getElementById("formContato");

  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
  if (btnSobre) {
    btnSobre.addEventListener("click", () => {
      window.location.href = "sobre.html";
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Nome: " + name);
      console.log("Email: " + email);
      console.log("Mensagem: " + message);

      alert("Formulário interceptado! Não quero enviar pro back.");

      enviaProBack();
    });
  }
});

function enviaProBack() {
  console.log("Enviado para o back, o resto os dev fazem!");
}
