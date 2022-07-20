import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
	labels: [
		"Día 1",
		"Día 2",
		"Día 3",
		"Día 4",
		"Día 5",
		"Día 6",
		"Día 5",
		"Día 5",
		"Día 5",
		"Día 5",
		"Nov",
		"Dec",
	],
	datasets: [
		{
			label: "Actividad",
			fill: false,
			lineTension: 0.5,
			backgroundColor: "#db86b2",
			borderColor: "#B57295",
			borderCapStyle: "butt",
			borderDashOffset: 0.0,
			borderJoinStyle: "#B57295",
			pointBorderColor: "#B57295",
			pointBackgroundColor: "#fff",
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: "#B57295",
			pointHoverBorderColor: "#B57295",
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data: [
				10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
				150,
			],
		},
	],
}

const options = {
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

const MyChart = () => (
    <Line
        data={data}
        options={options}
    />
)


export default MyChart
