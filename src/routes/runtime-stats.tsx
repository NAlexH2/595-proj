//Sources: https://www.youtube.com/watch?v=InMnGwP7iX4
import { Container, NavBar } from "../components/general";
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
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Run Times',
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
        month: 'MM YYYY',
      },
      title: {
        display: true,
        text: 'Release Year',
      },
    },
  y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Series Title',
      },
    },
  },
};

export const options1 =  {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Movie Release Years',
    },
  },
  scales: {
    x: {
      type: 'linear',
      position: 'bottom',
      title: {
        display: true,
        text: 'Release Year',
      },
      ticks: {
        callback: function(value) {
          return Number(value).toFixed(0); // Show only integers
        },
      },
    },
    y: {
      type: 'category',
      title: {
        display: true,
        text: 'Movie Title',
      },
    },
  },
};


export default function RuntimeStats() {
  const [url, setURL] = useState('https://stapi.co/api/v1/rest/series/search');
  const [url1, setURL1] = useState('https://stapi.co/api/v1/rest/movie/search');
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Run Times',
        data: [],
        backgroundColor:  [
          'rgba(0, 191, 255, 0.5)',
        ],
      },
    ],
  });

  const [movieData, setMovieData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Run Times',
        data: [],
        backgroundColor:  [
          'rgba(0, 191, 255, 0.5)',
        ],
      },
    ],
  });

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
          datasets: [
            {
              label: 'Release Year',
              data: runTimes,
              backgroundColor:  [
                'rgba(0, 191, 255, 0.5)',
              ],
            },
          ],
         }
        );
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, [url1]);

  return (
    <>
      <Container>
        <NavBar />
        <h1>Runtime Stats</h1>
        <Bar options={options} data={chartData}/>
        <Scatter options={options1} data={movieData}/>
      </Container>
    </>
  );
}
