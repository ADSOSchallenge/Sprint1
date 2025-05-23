//Código para mostrar agenda
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('main section');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) {
        section.innerHTML = '<p>Você precisa estar logado para ver sua agenda.</p>';
        return;
    }
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const minhasConsultas = agendamentos.filter(c =>
        c.cpfMedico === usuarioLogado.cpf || c.cpfPaciente === usuarioLogado.cpf
    );
    if (minhasConsultas.length === 0) {
        section.innerHTML = '<p>Você não tem consultas agendadas.</p>';
        return;
    }
    function nomePorCpf(cpf) {
        const user = usuarios.find(u => u.cpf === cpf);
        return user ? user.nome : cpf;
    }
    function formatarDataHora(dataHoraISO) {
        const dataObj = new Date(dataHoraISO);
        if (isNaN(dataObj)) return dataHoraISO;
        const dataFormatada = dataObj.toLocaleDateString('pt-BR');
        const horaFormatada = dataObj.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        return { dataFormatada, horaFormatada };
    }
    let tabela = `
        <table border="1" cellspacing="0" cellpadding="5" aria-label="Tabela de consultas agendadas">
            <thead>
                <tr>
                    <th>Médico</th>
                    <th>Paciente</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Especialização</th>
                </tr>
            </thead>
            <tbody>
    `;
    minhasConsultas.forEach(consulta => {
        const { dataFormatada, horaFormatada } = formatarDataHora(consulta.dataHora);
        tabela += `
            <tr>
                <td>${nomePorCpf(consulta.cpfMedico)}</td>
                <td>${nomePorCpf(consulta.cpfPaciente)}</td>
                <td>${dataFormatada}</td>
                <td>${horaFormatada}</td>
                <td>${consulta.especializacao}</td>
            </tr>
        `;
    });
    tabela += '</tbody></table>';
    section.innerHTML = tabela;
});
