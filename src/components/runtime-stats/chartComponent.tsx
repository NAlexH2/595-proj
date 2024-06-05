import { MovieScatter, SeriesBar } from './chartOptions';
import { ShowChartData, MovieChartData } from './fetchData';

const ChartComponent = ({ showChart, chartData, movieData}:{chartData: ShowChartData, movieData: MovieChartData, showChart: string}) => {
    return (
        <div className="flex-column mb-20 mx-10">
            <div id="bar" className={showChart === 'bar' ? 'visible' : 'hidden'}>
              <SeriesBar chartData={chartData}/>
            </div>
            <div id="scatter" className={showChart === 'scatter' ? 'visible' : 'hidden'}>
              <MovieScatter movieData={movieData}/>
            </div>
        </div>
    );
};

export default ChartComponent;