// Data de início do namoro (15/05/2024)
const dataInicio = new Date('2024-05-15');

function atualizarCronometro() {
  const agora = new Date();
  const diferenca = agora - dataInicio;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;


  document.getElementById('countdown').innerHTML = `${dias} dias, ${horasRestantes} horas, ${minutosRestantes} minutos, ${segundosRestantes} segundos`;
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);