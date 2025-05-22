//Código para agendar consultas no agendamento.html
document.getElementById('formAgendamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const cpfMedico = document.getElementById('idCpfMed').value.trim();
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

    const agendamento = {
        cpfMedico,
        cpfPaciente,
        dataConsulta,
        horaConsulta,
        especializacao
    };

    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    agendamentos.push(agendamento);

    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    alert('Consulta agendada com sucesso!');
    this.reset();
});
