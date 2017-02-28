'use strict';

var ctx = document.getElementById('myChart').getContext('2d');

// myChart.data.datasets[0].data => will get you the data array
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: productImageNames, // This will hold the name of each product image
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3], // This will hold the votes for each product image
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
});
