import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import DisplayDetail from "./DisplayDetail";


const DisplayAll = ({data})=>{
    // console.log(typeof data.data)

    const listOfShare = data.data
    // console.log(listOfShare)

    // const shareList =() => {        
    //     return 
    // };

    const newArrayWithName = (listOfShare).map((object) => {
        return object.name
    })
    const newArrayWithPrice = (listOfShare).map((object) => {
        return object.priceUsd
    })
    
    const state = {
        labels: newArrayWithName,
        datasets: [
            {
                label: "Name / Price in $",
                fill: false,
                lineTension: 0.7,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1.5,
                data: newArrayWithPrice,

        }
    ],
    }

return (
        <div>
            <div>
                <Bar
                    data={state}
                    width = {500}
                    height = {200}
                    options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: "All the Shares by price"
                                }
                            },
                            scales: {
                                y: {
                                    ticks: {
                                        // Include a dollar sign in the ticks
                                        callback: function(value, index, ticks) {
                                            return  value + '$';
                                        }
                                    }
                                }
                            }
                    }}
                />
            </div>
            <DisplayDetail share = {listOfShare} />
        </div>
    )
}

export default DisplayAll;