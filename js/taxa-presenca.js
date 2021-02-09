// Taxa de presença
var ctx = document.getElementById('taxaPresenca');

var taxaPresenca = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Presentes', 'Ausentes'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ['#3F80EA', '#eee'],
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
