import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const OverallPerformance = ({shareNames, shares}) => {


    const getTotalOfShare = (totalHeld, sharePrice) => {
        return parseFloat(totalHeld * sharePrice).toFixed(2);
    }

    const makeArrayOfTotalPrices = () => {

        let array = []

        shares.forEach((object) => {
            shareNames.forEach((dbShare) => {
                if (object.data.id === dbShare.name){
                    let total = getTotalOfShare(dbShare.shares_held, object.data.priceUsd)
                    let tempObject = {}
                    tempObject[object.data.id] = total;
                    array.push(tempObject);
                }
            })
        })

        return array;
    }

    const arrayOfPriceObjects = makeArrayOfTotalPrices();

    const arrayOfLabels = arrayOfPriceObjects.map((object) => {
        return Object.keys(object)[0]
    });

    const arrayOfPrices = arrayOfPriceObjects.map((object)=> {
        return Object.values(object)[0]
    });

    const state = {
        labels: arrayOfLabels,
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
            data: arrayOfPrices
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
