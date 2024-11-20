import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { colors } from '../utils/constants';
import { useTheme } from '../hooks/ThemeContext';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SpendingBarChart = () => {

    const { theme } = useTheme();

    const data = {
        labels: ['Shopping', 'Food'], // Only two categories on the y-axis
        datasets: [
            {
                label: 'Spending',
                data: [200, 350], // Example spending amounts
                backgroundColor: [`${colors.primary}`, '#545454'], // Colors for each bar
                borderRadius: { topLeft: 10, topRight: 10 }, // Rounded top for each bar
                barThickness: 30, // Width of each bar
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Make the bars horizontal, showing labels on the y-axis
        responsive: true,
        // plugins: {
        //     legend: {
        //         display: false, // Hide the legend
        //     },
        //     tooltip: {
        //         enabled: true, // Enable tooltips for more details on hover
        //     },
        // },
        plugins: {
            legend: {
                display: false, // Hide the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips for more details on hover
            },
            datalabels: {
                display: false, // Disable the value labels on bars (if using chartjs-plugin-datalabels)
            },
        },
        // scales: {
        //     x: {
        //         display: false, // Hide x-axis
        //     },
        //     y: {
        //         beginAtZero: true,
        //         // ticks: {
        //         //     color: '#000', // Customize color for the y-axis labels
        //         //     font: {
        //         //         size: 14,
        //         //     },
        //         // },
        //         grid: {
        //             display: false, // Optionally hide grid lines
        //         },
        //     },
        // },
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: theme === 'light' ? '#000' : 'white', // Customize color for the y-axis labels
                    font: {
                        size: 14,
                    },
                },
                grid: {
                    display: false, // Optionally hide grid lines
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default SpendingBarChart;
