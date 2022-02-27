import { Line, Chart } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const data = {
  labels: [
    'Oct 22',
    'Oct 23',
    'Oct 24',
    'Oct 25',
    'Oct 26',
    'Oct 27',
    'Oct 28',
    'Oct 29',
  ],
  datasets: [
    {
      label: 'Shipments',
      data: [10000, 15000, 12000, 5800, 46000, 3600, 22000, 60000],
      fill: false,
      borderColor: 'rgba(44, 217, 197)',
      backgroundColor: 'rgba(44, 217, 197)',
      tension: 0.1,
    },
    {
      label: 'Vehicles',
      data: [2500, 3000, 6000, 8200, 14000, 7200, 4000, 40000],
      fill: true,
      borderColor: 'rgba(102, 114, 251)',
      backgroundColor: 'rgba(102, 114, 251)',
      tension: 0,
    },
  ],
};

const options = {
  scales: {
    y: {
      ticks: { beginAtZero: true },
    },
  },
};

const LineChart = () => {
  return (
    <div className="p-5 md:px-10 py-5 ">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;