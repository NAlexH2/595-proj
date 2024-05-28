//Sources: https://www.youtube.com/watch?v=InMnGwP7iX4
import { Container, NavBar } from "../components/general";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
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
    },
  y: {
      beginAtZero: true,
    },
  },
};

//import Gantt from 'd3-gantt-chart';


export default function RuntimeStats() {
  const [url, setURL] = useState('https://stapi.co/api/v1/rest/series/search');
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
      
    /*    const formattedData = series.map(season => ({
          id: season.uid,
          name: season.title,
          start: new Date(season.originalRunStartDate),
          end: new Date(season.originalRunEndDate),
        })) ;
*/
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
          
  //        formattedData  
        );
      })
      .catch((error) => {
        console.error('Request Failed', error);
      });
  }, [url]);
/*
  useEffect(() => {
    if (chartData.length > 0) {
      const gantt = new Gantt('#gantt', chartData, {
        headerHeight: 50,
        barHeight: 20,
        padding: 40,
        timeDomainStart: new Date(1960, 0, 1),
        timeDomainEnd: new Date(2030, 0 ,1),
        timeDomainMode: 'fixed',
        taskTypes: chartData.map(d => d.name),
        taskStatus: {
          RUNNING: 'bar-running',
          COMPLETED: 'bar-completed',
          FAILED: 'bar-failed',
        },
        tooltip: true,
        locale: 'en-US',
      });
      gantt.redraw();
    }
   }, [chartData]);
*/
  return (
    <>
      <Container>
        <NavBar />
        <h1>Runtime Stats</h1>
        <Bar options={options} data={chartData}/>
      </Container>
    </>
  );
}
