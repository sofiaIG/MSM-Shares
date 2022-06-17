import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const xlabels = ["bitcoin", "polygon", "xrp"];
const ylabel = [40181.779753763306418, 0.6876154597166613, 1.3390286435164353];
const state = {
  labels: xlabels,
  datasets: [
    {
      label: "This is going to be the main",
      fill: false,
      lineTension: 0.0,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: ylabel,
    },
  ],
};

export default class MainChart extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "Average Title per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
