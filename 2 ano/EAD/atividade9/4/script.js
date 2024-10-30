document.addEventListener('DOMContentLoaded', () => {
    // Configuração do gráfico usando Chart.js
    const ctxSales = document.getElementById('salesChart').getContext('2d');

    const salesChart = new Chart(ctxSales, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [{
                label: 'Vendas',
                data: [1200, 1500, 800, 1700, 1900],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
