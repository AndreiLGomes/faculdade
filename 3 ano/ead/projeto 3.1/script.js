document.addEventListener("DOMContentLoaded", function () {
    const modalErro = document.getElementById("modalErro");
    const mensagemErro = document.getElementById("mensagemErro");
    const closeBtn = document.querySelector(".close-btn");

    document.getElementById("meuFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário se houver erros

        let erro = "";
        const nome = document.getElementById("nome").value.trim();
        const dataNascimento = document.getElementById("dataNascimento").value;
        const sexo = document.getElementById("sexo").value;
        const cpf = document.getElementById("cpf").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        // 1️⃣ Validação do Nome Completo
        if (nome === "" || nome.length < 3) {
            erro += "Nome completo deve ter pelo menos 3 caracteres.<br>";
        }

        // 2️⃣ Validação da Data de Nascimento (não pode ser no futuro)
        const hoje = new Date();
        const dataNasc = new Date(dataNascimento);
        if (dataNascimento === "" || dataNasc > hoje) {
            erro += "A data de nascimento não pode estar vazia ou no futuro.<br>";
        }

        // 3️⃣ Validação do Sexo
        if (sexo === "") {
            erro += "Selecione uma opção para o sexo.<br>";
        }

        // 4️⃣ Validação do CPF (Apenas números)
        const cpfFormatado = cpf.replace(/\D/g, "");
        if (cpfFormatado.length !== 11 || !/^\d{11}$/.test(cpfFormatado)) {
            erro += "CPF inválido. Digite apenas números (11 dígitos).<br>";
        }

        // 5️⃣ Validação do Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            erro += "Email inválido.<br>";
        }

        // 6️⃣ Validação da Senha
        if (senha.length < 6) {
            erro += "A senha deve ter pelo menos 6 caracteres.<br>";
        }
        if (senha !== confirmarSenha) {
            erro += "As senhas não coincidem.<br>";
        }

        // Exibir mensagens de erro no modal
        if (erro) {
            mensagemErro.innerHTML = erro;
            modalErro.style.display = "flex"; // Exibe o modal
        } else {
            alert("✅ Formulário enviado com sucesso!");
            this.submit(); // Envia o formulário
        }
    });

    // Fechar o modal ao clicar no botão X
    closeBtn.addEventListener("click", function () {
        modalErro.style.display = "none";
    });

    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", function (event) {
        if (event.target === modalErro) {
            modalErro.style.display = "none";
        }
    });
});
