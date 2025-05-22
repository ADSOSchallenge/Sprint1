//Codigo para a contato.html salvar dados para o ADSOS entrar em contato
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("idNome").value.trim();
        const email = document.getElementById("idEmail").value.trim();
        const duvida = document.getElementById("idPerg").value.trim();

        if (!nome || !email || !duvida) {
            alert("Por favor, preencha todos os campos!");
            return;
        }
        const mensagemContato = {
            nome,
            email,
            duvida
        };
        const mensagensSalvas = JSON.parse(localStorage.getItem("contatos")) || [];

        mensagensSalvas.push(mensagemContato);

        localStorage.setItem("contatos", JSON.stringify(mensagensSalvas));

        alert("Entraremos em contato!");
        form.reset(); 
    });
});
