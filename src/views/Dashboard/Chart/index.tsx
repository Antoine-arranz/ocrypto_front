import React from 'react';
import Wrapper from '../../../components/Wrapper';
import { Line } from 'react-chartjs-2';
const Chart = ({ data }: any) => {
  const timestamps = data.timestamps.map((time: any) => {
    return time.split('T')[0];
  });
  const dataChart = {
    labels: timestamps,
    datasets: [
      {
        label: 'Market price',
        data: data.currencies,
        fill: false,
        lineTension: 0, // bcg of chart
        borderColor: 'rgb(115, 109, 186)', // line of chart
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 5,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(115, 109, 186)', // border color of point
        pointBackgroundColor: 'rgb(115, 109, 186)', // bcg color of point
        borderWidth: 1.5,
        hoverBackgroundColor: null,
        hoverBorderColor: null,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: null,
        pointHoverBorderColor: null,
        pointHoverBorderWidth: null,
        pointRadius: 3, // size of point
        pointHitRadius: 5,
      },
      {
        label: 'quantity',
        data: data.usdAmount,
        fill: false,
        stepped: false,
        lineTension: 0, // bcg of chart
        borderColor: 'rgb(92, 186, 153)', // line of chart
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 1,
        borderJoinStyle: 'miter',
        pointBorderColor: 'teal', // border color of point
        pointBackgroundColor: 'rgb(92, 186, 153)', // bcg color of point
        borderWidth: 1.5,
        hoverBackgroundColor: 'rgb(92, 186, 153)',
        hoverBorderColor: null,
        pointBorderWidth: 1,
        pointHoverRadius: 10,
        pointHoverBackgroundColor: null,
        pointHoverBorderColor: null,
        pointHoverBorderWidth: null,
        pointRadius: 3, // size of point
        pointHitRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    redraw: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <Wrapper margin='auto' width='100%' height='100%'>
      <Line data={dataChart} options={options} />
    </Wrapper>
  );
};

export default Chart;
