//Código para cadastro.html funcionar e cadastrar contas
document.getElementById("formCadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("idNome").value.trim();
    const cpf = document.getElementById("idcpf").value.replace(/\D/g, '').trim();
    const email = document.getElementById("idEmail").value.trim();
    const senha = document.getElementById("idSenha").value.trim();
    if (nome.length < 3 || cpf.length !== 11 || senha.length < 8) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const usuario = { nome, cpf, email, senha };

    try {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Cadastro realizado com sucesso!");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Erro ao salvar no localStorage:", error);
        alert("Ocorreu um erro ao salvar os dados. Tente novamente.");
    }
});

