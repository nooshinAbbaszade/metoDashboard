import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {UserData} from "../data.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

UserData.map((userData) =>console.log((new Date().getFullYear()-new Date(userData.birthDate).getFullYear())));
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' ,
        },
        title: {
            display: true,
        },
    },
};

const labels =UserData.map(user =>
    user.lastName
)
export const data = {
    labels,
    datasets: [
        {
            label: 'سن',
            data: UserData.map((userData) =>new Date().getFullYear()-new Date(userData.birthDate).getFullYear()) ,
            backgroundColor: 'rgba(24,18,20,0.8)',
        },

    ],
};

export function ChartAge() {
    return <Bar options={options} data={data} />;
}
