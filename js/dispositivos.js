// Status diário
var ctx_2 = document.getElementById('dispositivosPlataforma');

var statusDiario = new Chart(ctx_2, {
  type: 'pie',
  data: {
    labels: ['Linux', 'MacOS', 'Android', 'iOS', 'Windows'],
    datasets: [
      {
        data: [12, 12, 12, 12, 52],
        backgroundColor: [
          '#000000',
          '#264D8C',
          '#55B9FF',
          '#ACB9FF',
          '#3F80EA',
        ],
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
