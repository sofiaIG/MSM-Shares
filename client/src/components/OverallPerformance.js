import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const OverallPerformance = () => {

    const state = {
        labels: ['Bitcoin', 'Polygon', 'Tether'],
        datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
              'rgb(137,149,199)',
              'rgb(137,199,152)',
              'rgb(209,165,102)',
            
             
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
           
            ],
            data: [77897.99, 32503.7, 15333 ]
          }
        ]
      }


    return (
        <div>
 <h3>Overall Performance</h3>
            <div>
            <Pie
            data={state}
            options={{
                title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                },
        //     scales: {
        //         y: {
        //             ticks: {
        //                 // Include a dollar sign in the ticks
        //                 callback: function(value, index, ticks) {
        //                     return  value + '%';
        //                 }
        //             }
        //         }
        //   }
        }}
        />
            </div>
        </div>
    );
}
export default OverallPerformance;
