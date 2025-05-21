// Funções para o login.html funcionar
document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();

    const cpf = document.getElementById("idcpf").value.replace(/\D/g, '').trim();
    const senha = document.getElementById("idSenha").value.trim();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario) {
        if (usuario.cpf === cpf && usuario.senha === senha) {
            alert("Login concluído!");
            window.location.href = "menuLogin.html";
        } else {
            alert("CPF ou senha inválidos!");
        }
    } else {
        alert("Nenhum usuário cadastrado encontrado!");
    }
});
