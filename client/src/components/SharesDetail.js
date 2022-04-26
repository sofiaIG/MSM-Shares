import React from 'react'; 
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const SharesDetail = ({share, removeShare, setClicked, findShareInDBfromShares, shareHistory}) => {
    const newShare = () =>{
        let newShareHistory ;
        shareHistory.forEach((object) =>{
            if (Object.keys(object)[0] == share.data.id) {
                newShareHistory = object;
                return 
        }
    }) 
    return newShareHistory;
    }
    const thisShareHistroy = newShare();
    const shareData = thisShareHistroy[share.data.id]

    const newArrayWithPrice = (shareData.data).map((object) =>{
        return object.priceUsd
    })

    const newArrayWithTime = (shareData.data).map((object) =>{
        return object.date
    })
    const shareInDatabase=findShareInDBfromShares(share);

    const totValueOfShare = () => {
        return share.data.priceUsd * shareInDatabase.shares_held;
    }
    
    const sliceTime = newArrayWithTime.slice(0,30);
    const slicePrice = newArrayWithPrice.slice(0,30);

    const handleDelete = () => {
        removeShare(share);
        setClicked(false);
    }
    const xlabel = sliceTime;
    const ylabel = slicePrice;

    const state = {
        labels: xlabel,
        datasets: [
            {
            label: share.data.name,
            fill: false,
            lineTension: 0.7,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1.5,
            data: ylabel,

            }
        ]
        }

    const totalVal = totValueOfShare();


    return (
        <div className='share-detail'>
                <div>        
            <Line
            data={state}
            width = {800}
            height = {400}
            options={{
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: `The ${share.data.name} chart graph`
                        }
                    }
                } 
            }}
            />
        </div>
            <div>
            <p><strong>Name: </strong>{share.data.name}</p>
            <p><strong>Symbol: </strong>{share.data.symbol}</p>
            <p><strong>Price: </strong>{share.data.priceUsd}</p>
            <p><strong>Shares held: </strong>{shareInDatabase.shares_held}</p>
            <p><strong>Total Value of Share Held: ${totalVal.toFixed(2)}</strong></p>
            <button onClick={handleDelete}>Sell</button>
            </div>      
        </div>
    );
}

export default SharesDetail;