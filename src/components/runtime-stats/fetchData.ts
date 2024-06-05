import { useState, useEffect } from "react";
import axios from "axios";

interface MovieStapiResponse {
  uid: string;
  title: string;
  mainDirector: {
    uid: string;
    name: string;
  };
  titleBulgarian: string;
  titleCatalan: string;
  titleChineseTraditional: string | null;
  titleGerman: string | null;
  titleItalian: string | null;
  titleJapanese: string | null;
  titlePolish: string | null;
  titleRussian: string | null;
  titleSerbian: string | null;
  titleSpanish: string | null;
  stardateFrom: number;
  stardateTo: number;
  yearFrom: number;
  yearTo: number;
  usReleaseDate: string;
}

interface ShowStapiResponse {
  uid: string;
  title: string;
  abbreviation: string;
  productionStartYear: number;
  productionEndYear: number | null;
  originalRunStartDate: number | null;
  originalRunEndDate: number | null;
  seasonsCount: number | null;
  episodesCount: number | null;
  featureLengthEpisodesCount: number | null;
  productionCompany: {
    uid: string;
    name: string;
  };
  originalBroadcaster: {
    uid: string;
    name: string;
  };
}

export interface ShowChartData {
  labels: string[];
  color: string;
  datasets: [
    {
      label: string;
      data: number[][];
      backgroundColor: string[];
      borderColor: string;
      color: string;
    },
  ];
}

export interface MovieChartData {
  labels: string[];
  color: string;
  datasets: [
    {
      label: string;
      data: { x: number; y: string }[];
      backgroundColor: string[];
      borderColor: string;
      color: string;
    },
  ];
}

export const FetchData = (url: string, url1: string) => {
  const [chartData, setChartData] = useState<ShowChartData>({
    labels: [],
    color: "rgba(204,204,204,1)",
    datasets: [
      {
        label: "Run Times",
        data: [],
        backgroundColor: ["rgba(0, 191, 255, 0.5)"],
        borderColor: "rgba(204,204,204,0.5)",
        color: "rgba(204,204,204,0.5)",
      },
    ],
  });

  const [movieData, setMovieData] = useState<MovieChartData>({
    labels: [],
    color: "rgba(204,204,204,1)",
    datasets: [
      {
        label: "Run Times",
        data: [],
        backgroundColor: ["rgba(0, 191, 255, 0.5)"],
        borderColor: "rgba(204,204,204,0.5)",
        color: "rgba(204,204,204,0.5)",
      },
    ],
  });

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        const series: ShowStapiResponse[] = response.data.series;
        const names = series.map(season => season.title);
        const runTimes = series.map(season => {
          let startDate = season.originalRunStartDate;
          let endDate = season.originalRunEndDate;

          if (startDate === null) {
            startDate = new Date().getTime();
          }

          if (endDate === null) {
            endDate = new Date().getTime();
          }

          return [startDate, endDate];
        });

        setChartData({
          labels: names,
          color: "rgba(204,204,204,1)",
          datasets: [
            {
              label: "Run Times",
              data: runTimes,
              backgroundColor: ["rgba(0, 191, 255, 0.5)"],
              borderColor: "rgba(204,204,204,0.5)",
              color: "rgba(204,204,204,0.5)",
            },
          ],
        });
      })
      .catch(error => {
        console.error("Request Failed", error);
      });
  }, [url]);

  useEffect(() => {
    axios
      .get(url1)
      .then(response => {
        // const movies = response.data.movies;
        const movies: MovieStapiResponse[] = response.data.movies;
        const names = movies.map(movie => movie.title);
        const runTimes = movies.map(movie => {
          let releaseDate = new Date(movie.usReleaseDate).getTime();

          if (releaseDate == null || isNaN(releaseDate) || releaseDate == 0) {
            releaseDate = new Date().getTime();
          }

          return {
            x: new Date(releaseDate).getFullYear(),
            y: movie.title,
          };
        });

        setMovieData({
          labels: names,
          color: "rgba(204,204,204,1)",
          datasets: [
            {
              label: "Release Year",
              data: runTimes,
              backgroundColor: ["rgba(0, 191, 255, 0.5)"],
              borderColor: "rgba(204,204,204,0.5)",
              color: "rgba(204,204,204,0.5)",
            },
          ],
        });
      })
      .catch(error => {
        console.error("Request Failed", error);
      });
  }, [url1]);

  return { chartData, movieData };
};
