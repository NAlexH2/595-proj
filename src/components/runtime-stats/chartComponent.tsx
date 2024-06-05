import { Bar, Scatter } from 'react-chartjs-2';
import { options, options1 } from './chartOptions';
import 'chartjs-adapter-date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js/auto';
import { ShowChartData, MovieChartData } from './fetchData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const ChartComponent = ({ showChart, chartData, movieData}:{chartData: ShowChartData, movieData: MovieChartData, showChart: string}) => {
    return (
        <div className="flex-column mb-20 mx-10">
            <div id="bar" className={showChart === 'bar' ? 'visible' : 'hidden'}>
              <Bar options={options} data={chartData}/>
            </div>
            <div id="scatter" className={showChart === 'scatter' ? 'visible' : 'hidden'}>
              <Scatter options={options1} data={movieData}/>
            </div>
        </div>
    );
};

export default ChartComponent;