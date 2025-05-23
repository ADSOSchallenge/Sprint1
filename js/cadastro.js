//Código para cadastro.html funcionar e cadastrar contas
document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('idNome').value.trim();
    const cpf = document.getElementById('idCpf').value.trim();
    const email = document.getElementById('idEmail').value.trim();
    const senha = document.getElementById('idSenha').value.trim();
    const tipoUsuario = document.getElementById('idTipoUsuario').value;

    if (!nome || !cpf || !email || !senha || !tipoUsuario) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    if (!/^\d{11}$/.test(cpf)) {
        alert('CPF deve conter exatamente 11 números.');
        return;
    }
    if (senha.length < 8) {
        alert('A senha deve ter pelo menos 8 caracteres.');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(user => user.email.toLowerCase() === email.toLowerCase());
    if (usuarioExistente) {
        alert('E-mail já cadastrado. Tente fazer login.');
        return;
    }

    const novoUsuario = { nome, cpf, email, senha, tipoUsuario };
    usuarios.push(novoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; 
});


