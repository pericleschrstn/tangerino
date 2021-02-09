// Status diário
var ctx_2 = document.getElementById('statusDiario');

var statusDiario = new Chart(ctx_2, {
  type: 'pie',
  data: {
    labels: ['Sem presença', 'Férias', 'Ponto fechado', 'Ponto aberto'],
    datasets: [
      {
        data: [12, 12, 12, 64],
        backgroundColor: ['#000000', '#264D8C', '#55B9FF', '#3F80EA'],
      },
    ],
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
  },
});
