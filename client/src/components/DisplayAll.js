import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import DisplayDetail from "./DisplayDetail";

const DisplayAll = ({ data }) => {
    //   const allData = data.data.map(d=>d)
    //   console.log( typeof allData)
    const listOfShare = data.data
    const shareList = listOfShare.map((share, index) => {

        return <DisplayDetail key={index} share={share} />
    });

    const newArrayWithName = (listOfShare).map((object) => {
        return object.name
    })
    const newArrayWithPrice = (listOfShare).map((object) => {
        return object.priceUsd
    })
    
    // console.log(newArrayWithPrice);
    
    const state = {
        labels: newArrayWithName,
        datasets: [
            {
                label: "Share data diagramm name by price",
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
                                    text: ""
                                }
                            }
                    }}
                />
            </div>
            {shareList}
        </div>
    )
}

export default DisplayAll;