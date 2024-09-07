import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// Register the components you're using with Chart.js
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {
    const [ethData, setEthData] = useState([]);

    useEffect(() => {
        const fetchEthData = async () => {
            const res = await fetch("/api/fetchEthPrices");
            const data = await res.json();
            setEthData(data);
        };

        fetchEthData();
        const interval = setInterval(fetchEthData, 15 * 60 * 1000); // Fetch every 15 minutes

        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ethData.map(item => item.timestamp),
        datasets: [
            {
                label: "Ethereum Price",
                data: ethData.map(item => item.close),
                fill: false,
                borderColor: "#4caf50",
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: 'category', // Registering "category" as x-axis type
            },
            y: {
                beginAtZero: false,
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default Chart;
