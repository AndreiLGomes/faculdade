document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionar = document.getElementById("btnAdicionar");
  const btnNavegar = document.getElementById("navigateBtn");

  // Botão de navegação para outra página
  btnNavegar?.addEventListener("click", () => {
    window.location.href = "contato.html";
  });

  // Botão de adicionar usuário (chama função legada que não pode ser modificada)
  btnAdicionar?.addEventListener("click", (event) => {
    event.preventDefault(); // evita comportamento padrão do form
    adicionarusuario(); // função definida no script1.js
  });
});
