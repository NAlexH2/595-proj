import "chart.js/auto";
import { Bar, Scatter } from "react-chartjs-2";
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
import { MovieChartData, ShowChartData } from "./fetchData";

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

export const SeriesBar = ({chartData}:{chartData: ShowChartData}) => {
  const options = {
    responsive: true,
    color: "rgba(204,204,204,1)",
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Run Times",
        color: "rgba(204,204,204,1)",
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        min: "1967-01-01",
        type: "time",
        tooltipFormat: "YYYY-MM-DD",
        displayFormats: {
          year: "YYYY",
        },
        title: {
          display: true,
          text: "Release Year",
          color: "rgba(204,204,204,1)",
        },
        grid: {
          color: "rgba(204,204,204,1)",
        },
        ticks: {
          color: "rgba(204,204,204,1)",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Series Title",
          color: "rgba(204,204,204,1)",
        },
        grid: {
          color: "rgba(204,204,204,1)",
        },
        ticks: {
          color: "rgba(204,204,204,1)",
        },
      },
    },
  };
  return (
  <>
    {/* @ts-expect-error because the options are fine*/}
    <Bar options={options} data={chartData}/>
  </>
  )
};


export const MovieScatter = ({movieData}:{movieData: MovieChartData}) => {
  const options1 = {
    responsive: true,
    color: "rgba(204,204,204,1)",
    radius: 5,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Movie Release Years",
        color: "rgba(204,204,204,1)",
      },
    },
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Release Year",
          color: "rgba(204,204,204,1)",
        },
        ticks: {
          color: "rgba(204,204,204,1)",
          callback: function (value: number) {
            return Number(value).toFixed(0);
          },
        },
        grid: {
          color: "rgba(204,204,204,1)",
        },
      },
      y: {
        type: "category",
        title: {
          display: true,
          text: "Movie Title",
          color: "rgba(204,204,204,1)",
        },
        grid: {
          color: "rgba(204,204,204,1)",
        },
        ticks: {
          color: "rgba(204,204,204,1)",
        },
      },
    },
  };
  return (
    <>
      {/* @ts-expect-error because the options are fine*/}
      <Scatter options={options1} data={movieData}/>
    </>
  )
}