//Sources: https://www.youtube.com/watch?v=InMnGwP7iX4
//         https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react?rq=3
import { useState } from 'react';
import { GroupFooter, NavBar } from "../components/general";
import ChartComponent from '../components/runtime-stats/chartComponent';
import ButtonToggle from '../components/runtime-stats/buttonToggle';
import { FetchData } from '../components/runtime-stats/fetchData';

export const RuntimeStats = () => {
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

