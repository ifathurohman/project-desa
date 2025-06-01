import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface SDGTargetChartProps {
    yearable: number[];
    header: string[];
    title: string;
}

const SDGTargetChart: React.FC<SDGTargetChartProps> = ({ yearable, header, title }) => {
    const data = {
        labels: header,
        datasets: [
            {
                label: 'Target Progress',
                data: yearable.filter((_, i) => i % 2 === 0),
                borderColor: 'rgb(14, 156, 148)',
                backgroundColor: 'rgba(14, 156, 148, 0.5)',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
    };

    return (
        <div className="w-full h-64 mt-4 flex justify-center">
            <div className="w-[500px]">
                <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default SDGTargetChart;