'use client'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { colors } from '../utils/constants';
import { useTheme } from '../hooks/ThemeContext';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SpendingBarChart = () => {

    const { theme } = useTheme();

    const data = {
        labels: ['Shopping', 'Food'],
        datasets: [
            {
                label: 'Spending',
                data: [200, 350],
                backgroundColor: [`${colors.primary}`, '#545454'],
                borderRadius: { topLeft: 9, topRight: 9 },
                barThickness: 23,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
            datalabels: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: theme === 'light' ? '#000' : 'white',
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default SpendingBarChart;
