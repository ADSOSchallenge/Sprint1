//Deslogar
document.getElementById('btnLogout').addEventListener('click', function() {
    localStorage.removeItem('usuarioLogado');
    alert('Você saiu da sua conta.');
    window.location.href = 'login.html';
});
