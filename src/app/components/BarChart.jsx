import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function YearlyBarChart() {

    const currentMonthIndex = new Date().getMonth();

    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const data = {
        labels: monthNames,
        // labels: [
        //     'January', 'February', 'March', 'April', 'May', 'June',
        //     'July', 'August', 'September', 'October', 'November', 'December'
        // ],
        datasets: [
            {
                label: 'Rs',
                data: [12, 19, 3, 5, 2, 3, 9, 14, 18, 7, 15, 11], // Example data for each month
                // backgroundColor: '#D9D9D9', // Customize bar color
                // borderColor: '#D9D9D9',

                backgroundColor: Array(12)
                    .fill('#D9D9D9') // Default color for all bars
                    .map((color, index) =>
                        index === currentMonthIndex ? '#25C935' : color  // Highlight current month in red
                    ),
                borderColor: Array(12)
                    .fill('#D9D9D9')
                    .map((color, index) =>
                        index === currentMonthIndex ? '#25C935' : color  // Red border for current month
                    ),

                borderWidth: 1,
                borderRadius: 10,  // Set the border radius to round the top
                borderSkipped: 'bottom',  // Apply rounding only to the top
                maxBarThickness: 20, // Set the max bar width in pixels
            },
        ],
    };

    // Options for customizing the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Yearly Data Overview',
            },
            datalabels: {
                color: 'black',
                anchor: 'end',
                align: 'top',
                font: {
                    weight: 'bold',
                    size: 12,
                },
                padding: 8, // Padding inside the box
                backgroundColor: '#25C935', // Box color
                color: 'white',
                borderRadius: 12, // Rounded corners for the box
                borderWidth: 1, // Border width for the box
                borderColor: 'rgba(0, 0, 0, 0.5)', // Border color for the box
                // Display label only on the current month bar
                formatter: (value, context) => {
                    return context.dataIndex === currentMonthIndex ? `RS: ${value}` : null;
                },
            },
        },
        // scales: {
        //     y: {
        //         beginAtZero: true, // Start y-axis at 0
        //         ticks: {
        //             precision: 0, // Display whole numbers
        //         },
        //     },
        // },

        scales: {
            y: {
                display: false, // Hide the y-axis
                beginAtZero: true,
            },
            x: {
                grid: {
                    display: false, // Optionally hide the grid lines for a cleaner look
                },
                // barPercentage: 0.1,       // Makes each bar narrower (smaller value = narrower bars)
                // categoryPercentage: 0.8,   // Adjusts the spacing around each bar        
            },
        },
    };

    return (
        <Bar data={data} options={options} />
    );
}
