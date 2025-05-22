//Salvar feedback dos usuários no localstorage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const nome = document.getElementById("idNome").value.trim();
        const cpf = document.getElementById("idcpf").value.trim();
        const nota = document.getElementById("idNota").value.trim();
        const comentario = document.getElementById("idCom").value.trim();

        if (!nome || !cpf || !nota || !comentario) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const feedback = {
            nome,
            cpf,
            nota,
            comentario,
            data: new Date().toLocaleString("pt-BR")
        };
        const feedbacksSalvos = JSON.parse(localStorage.getItem("feedbacks")) || [];

        feedbacksSalvos.push(feedback);

        localStorage.setItem("feedbacks", JSON.stringify(feedbacksSalvos));

        alert("Feedback enviado com sucesso!");

        form.reset(); 
    });
});
