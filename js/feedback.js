//Salvar feedback dos usuários no localstorage
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formFeedback"); 
    const enviarBt = document.getElementById("enviarbt");  
    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nome = document.getElementById("idNome").value.trim();
        const cpf = document.getElementById("idCpf").value.trim();
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

        let feedbacksSalvos = JSON.parse(localStorage.getItem("feedbacks")) || [];

    
        feedbacksSalvos.push(feedback);

        localStorage.setItem("feedbacks", JSON.stringify(feedbacksSalvos));

        alert("Feedback enviado com sucesso!");

        form.reset();
    });
});

