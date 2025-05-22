//Código para mostrar agenda
document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('main section');

    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (agendamentos.length === 0) {
        section.innerHTML += '<p>Nenhuma consulta agendada.</p>';
        return;
    }

    function nomePorCpf(cpf) {
        const user = usuarios.find(u => u.cpf === cpf);
        return user ? user.nome : cpf;
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

    agendamentos.forEach(consulta => {
        tabela += `
            <tr>
                <td>${nomePorCpf(consulta.cpfMedico)}</td>
                <td>${nomePorCpf(consulta.cpfPaciente)}</td>
                <td>${consulta.dataConsulta}</td>
                <td>${consulta.horaConsulta}</td>
                <td>${consulta.especializacao}</td>
            </tr>
        `;
    });

    tabela += '</tbody></table>';

    section.innerHTML += tabela;
});
