//Sources: https://www.youtube.com/watch?v=InMnGwP7iX4
//         https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react?rq=3
/*import { GroupFooter, NavBar } from "../components/general";
import {chartComponent} from "../components/runtime-stats";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { Scatter, Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';


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

export const options = {
  responsive: true,
  color:'rgba(204,204,204,1)',
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Run Times',
      color:'rgba(204,204,204,1)',
    },
  },
  indexAxis: 'y',
  scales: {
    x: {
      min: '1967-01-01',
      type: 'time',
      tooltipFormat: 'YYYY-MM-DD',
      displayFormats: {
        year: 'YYYY',
      },
      title: {
        display: true,
        text: 'Release Year',
        color:'rgba(204,204,204,1)',
      },
      grid: {
        color:'rgba(204,204,204,1)',
      },
      ticks: {
        color: 'rgba(204,204,204,1)',
      },
    },
  y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Series Title',
        color:'rgba(204,204,204,1)',
      },
      grid: {
        color:'rgba(204,204,204,1)',
      },
      ticks: {
        color: 'rgba(204,204,204,1)',
      },
    },
  },
};

export const options1 =  {
  responsive: true,
  color:'rgba(204,204,204,1)',
  radius: 5,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Movie Release Years',
      color:'rgba(204,204,204,1)',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Release Year',
        color:'rgba(204,204,204,1)',
      },
      ticks: {
        color: 'rgba(204,204,204,1)',
        callback: function(value) {
          return Number(value).toFixed(0);
        },
      },
      grid: {
        color:'rgba(204,204,204,1)',
      },
    },
    y: {
      type: 'category',
      title: {
        display: true,
        text: 'Movie Title',
        color:'rgba(204,204,204,1)',
      },
      grid: {
        color:'rgba(204,204,204,1)',
      },
      ticks: {
        color: 'rgba(204,204,204,1)',
      },
    },
  },
};


export default function RuntimeStats() {
  const [url] = useState('https://stapi.co/api/v1/rest/series/search');
  const [url1] = useState('https://stapi.co/api/v1/rest/movie/search');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Run Times',
        data: [],
        backgroundColor:  [
          'rgba(0, 191, 255, 0.5)',
        ],
        borderColor: 'rgba(204,204,204,0.5)',
        color:'rgba(204,204,204,0.5)',
      },
    ],
  });

  const [movieData, setMovieData] = useState({
    labels: [],
    color:'rgba(204,204,204,1)',
    datasets: [
      {
        label: 'Release Year',
        data: [],
        backgroundColor:  [
          'rgba(0, 191, 255, 0.5)',
        ],
        borderColor: 'rgba(204,204,204,0.5)',
        color:'rgba(204,204,204,0.5)',
      },
    ],
  });

  const [showChart, setShowChart] = useState('bar'); 

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const series = response.data.series;
        const names = series.map(season => season.title);
        const runTimes = series.map(season => {
          let startDate = new Date(season.originalRunStartDate).getTime();
          let endDate = new Date(season.originalRunEndDate).getTime();

          if(startDate == null || isNaN(startDate) || startDate == 0) {
            startDate = new Date().getTime();
          }

          if(isNaN(endDate) || endDate == null || endDate == 0) {
            endDate = new Date().getTime();
          }

         return [startDate, endDate];
        });
    
        setChartData(
          {
          labels: names,
          datasets: [
            {
              label: 'Run Times',
              data: runTimes,
              backgroundColor:  [
                'rgba(0, 191, 255, 0.5)',
              ],
              borderColor: 'rgba(204,204,204,0.5)',
              color:'rgba(204,204,204,0.5)',
            },
          ],
         }
        );
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, [url]);

  useEffect(() => {
    axios
      .get(url1)
      .then((response) => {
        const movies = response.data.movies;
        const names = movies.map(movie => movie.title);
        const runTimes = movies.map(movie => {
          let releaseDate = new Date(movie.usReleaseDate).getTime();

          if(releaseDate == null || isNaN(releaseDate) || releaseDate == 0) {
            releaseDate = new Date().getTime();
          }

          return {
            x:new Date(releaseDate).getFullYear(),
            y:movie.title
          };
        });
      
        setMovieData(
          {
          labels: names,
          color:'rgba(204,204,204,1)',
          datasets: [
            {
              label: 'Release Year',
              data: runTimes,
              backgroundColor:  [
                'rgba(0, 191, 255, 0.5)',
              ],
              borderColor: 'rgba(204,204,204,0.5)',
              color:'rgba(204,204,204,0.5)',
            },
          ],
         }
        );
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, [url1]);

  const handleClick1 = () => {
    setShowChart('bar');
  };

  const handleClick2 = () => {
    setShowChart('scatter');
  };

  return (
    <>
        <NavBar title={window.location.href} />
        
        <h1 className="flex justify-center">Runtime Stats</h1>
        <div className="flex justify-center">
          <button className="bg-cyan-600 hover:bg-cyan-800 text-cyan-50 font-bold py-2 px-4 m-3 rounded" onClick={handleClick1}>
            Series
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-800 text-cyan-50 font-bold py-2 px-4 m-3 rounded" onClick={handleClick2}>
            Movies
          </button>
        </div>
        <chartComponent showChart={showChart} chartData={chartData} movieData={movieData} />
        <div className="flex-column mb-20 mx-10">
            <div id="bar" className={showChart === 'bar' ? 'visible' : 'hidden'}>
              <Bar options={options} data={chartData}/>
            </div>
            <div id="scatter" className={showChart === 'scatter' ? 'visible' : 'hidden'}>
              <Scatter options={options1} data={movieData}/>
            </div>
        </div>
      <GroupFooter />
    </>
  );
}
*/
import { useState } from 'react';
import { GroupFooter, NavBar } from "../components/general";
import ChartComponent from '../components/runtime-stats/chartComponent';
import ButtonToggle from '../components/runtime-stats/buttonToggle';
import { FetchData } from '../components/runtime-stats/fetchData';

const RuntimeStats = () => {
  //const [url] = useState('https://stapi.co/api/v1/rest/series/search');
  //const [url1] = useState('https://stapi.co/api/v1/rest/movie/search');
  const url = "https://stapi.co/api/v1/rest/series/search";
  const url1 = "https://stapi.co/api/v1/rest/movie/search";
  const [showChart, setShowChart] = useState('bar'); 
  const { chartData, movieData } = FetchData(url, url1);

  const handleClick1 = () => {
    setShowChart('bar');
  };

  const handleClick2 = () => {
    setShowChart('scatter');
  };

  return (
    <>
      <NavBar title={window.location.href} />
      <h1 className="flex justify-center">Runtime Stats</h1>
      <ButtonToggle handleClick1={handleClick1} handleClick2={handleClick2} />
      <ChartComponent showChart={showChart} chartData={chartData} movieData={movieData} />
      <GroupFooter />
    </>
  );
};

export default RuntimeStats;

