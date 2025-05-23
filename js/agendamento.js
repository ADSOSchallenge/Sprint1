//Código para agendar consultas no agendamento.html
document.addEventListener('DOMContentLoaded', function () {
    const selectMedicos = document.getElementById('idSelectMedicos');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const medicos = usuarios.filter(u => u.tipoUsuario === 'medico');

    medicos.forEach(medico => {
        const option = document.createElement('option');
        option.value = medico.cpf;
        option.textContent = `${medico.nome} - CPF: ${medico.cpf}`;
        selectMedicos.appendChild(option);
    });

    const form = document.getElementById('formAgendamento');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const cpfMedico = selectMedicos.value;
        const cpfPaciente = document.getElementById('idCpfPac').value.trim();
        const dataConsulta = document.getElementById('idData').value;
        const horaConsulta = document.getElementById('idHora').value;
        const especializacao = document.getElementById('idEsp').value.trim();

        if (!cpfMedico || !cpfPaciente || !dataConsulta || !horaConsulta || !especializacao) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!/^\d{11}$/.test(cpfMedico) || !/^\d{11}$/.test(cpfPaciente)) {
            alert('CPF deve conter exatamente 11 números.');
            return;
        }

        const dataHoraISO = `${dataConsulta}T${horaConsulta}`;

        const agendamento = {
            id: Date.now().toString(),
            cpfMedico,
            cpfPaciente,
            dataHora: dataHoraISO,
            especializacao
        };

        let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
        agendamentos.push(agendamento);
        localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

        alert('Consulta agendada com sucesso!');
        form.reset();
    });
});

