//Código para cadastro.html funcionar e cadastrar contas
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('idNome').value;
    const cpf = document.getElementById('idCpf').value;
    const email = document.getElementById('idEmail').value;
    const senha = document.getElementById('idSenha').value;

    if (!nome || !cpf || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert('E-mail já cadastrado. Tente fazer login.');
        return;
    }

    const novoUsuario = { nome, cpf, email, senha };
    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; 
});
