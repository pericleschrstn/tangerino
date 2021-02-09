var ctx = document.getElementById('atrasosFaltas').getContext('2d');
var data = {
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ['#3F80EA', '#eee'],
    },
  ],
  labels: ['Atrasos', 'Faltas'],
};
var myDoughnutChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      position: 'right',
    },
  },
});
