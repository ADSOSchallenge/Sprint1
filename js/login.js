//Codigo para o login.html funcionar e logar contas cadastradas
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpf = document.getElementById('idCpf').value;
    const senha = document.getElementById('idSenha').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioAutenticado = usuarios.find(user => user.cpf === cpf && user.senha === senha);

    if (usuarioAutenticado) {
        alert(`Bem-vindo(a), ${usuarioAutenticado.nome}!`);

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAutenticado));
    
        window.location.href = 'menu.html';
    } else {
        alert('CPF ou senha incorretos. Tente novamente.');
    }
});

