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