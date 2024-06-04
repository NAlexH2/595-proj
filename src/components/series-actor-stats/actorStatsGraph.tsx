import "chart.js/auto";
import { Line } from "react-chartjs-2";

export const ActorStatsGraph = ({
  actorData,
}: {
  actorData: { [key: string]: string[] };
}) => {
  const labels = Object.keys(actorData);
  const data = {
    labels,
    datasets: [
      {
        data: Object.values(actorData).map(values => values.length),
        label: "Total",
        backgroundColor: "white",
        borderColor: "#fdba74",
        pointStyle: "star",
        pointHitRadius: 4,
        pointRadius: 10,
        pointHoverRadius: 12,
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointBackgroundColor: "#ad08ff",
        pointBorderColor: "#ad08ff",
      },
    ],
  };
  const options = {
    type: "line",
    responsive: true,
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "white",
          borderColor: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "white",
          borderColor: "white",
        },
      },
    },
    plugins: {
      customCanvasBackgroundColor: { color: "white" },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Total Number Of Actors Used In Each Series (Including Extras)",
        color: "white",
        font: {
          size: 20,
        },
      },
    },
  };
  return (
    <>
      <Line
        data={data}
        options={options}
        className="place-content-center place-items-center text-center"
      />
    </>
  );
};
