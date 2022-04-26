import React from 'react'; 
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const SharesDetail = ({share, removeShare, setClicked}) => {

    const handleDelete = () => {
        removeShare(share._id);
        setClicked(false);
    }
    const xlabels = [0, share.data.date];
    const ylabel = [share.data.priceUsd];

    const state = {
        labels: xlabels,
        datasets: [
            {
            label: [share.data.name],
            fill: false,
            lineTension: 0.7,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: ylabel
            }
        ]
        }

    return (
        <div className='share-detail'>
            <div>
            <h4>GRAPH</h4>
            <p><strong>Name: </strong>{share.data.name}</p>
            <p><strong>Symbol: </strong>{share.data.symbol}</p>
            <p><strong>Price: </strong>{share.data.priceUsd}</p>
            <p>Profit: </p>
            <p>Shares held: </p>
            </div>
            <div>
            <Line
            data={state}
            options={{
                title:{
                display:true,
                text:'Average Title per month',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </div>
    
            <button onClick={handleDelete}>Sell</button>
        </div>
    );
}

export default SharesDetail;