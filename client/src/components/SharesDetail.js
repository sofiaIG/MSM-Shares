import React from 'react'; 
import {Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

const SharesDetail = ({share, removeShare, setClicked, shareHistory}) => {

    const newShare = () =>{
        let newShareHistory ;
        shareHistory.forEach((object) =>{
            if (Object.keys(object)[0] == share.data.id) {
                newShareHistory = object;
                return 
        }
    }) 
    // console.log(newShareHistory);
    return newShareHistory;
    }
    // console.log(newShare);

    const thisShareHistroy = newShare();
    // console.log(thisShareHistroy);
    // const name = thisShareHistroy.data.name
    // console.log({name});
    const shareData = thisShareHistroy[share.data.id]
    // console.log(shareData);
    // console.log(shareData.data);

    // useing map for  price and time   

    const newArrayWithPrice = (shareData.data).map((object) =>{
        return object.priceUsd
    })
    // console.log(newArrayWithTime);

    const newArrayWithTime = (shareData.data).map((object) =>{
        return object.date
    })

    const sliceTime = newArrayWithTime.slice(0,30);
    const slicePrice = newArrayWithPrice.slice(0,30);
    // console.log(newArrayWithTime);

// console log this see whats get back from it 
    const handleDelete = () => {
        removeShare(share._id);
        setClicked(false);
    }
    const xlabel = sliceTime;
    const ylabel = slicePrice;

    // console.log(xlabel);

    const state = {
        labels: xlabel,
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
            <p><strong>Name: </strong>{share.data.name}</p>
            <p><strong>Symbol: </strong>{share.data.symbol}</p>
            <p><strong>Price: </strong>{share.data.priceUsd}</p>
            <p>Profit: </p>
            <p>Shares held: </p>
            </div>
            <button onClick={handleDelete}>Sell</button>
        </div>
    );
}

export default SharesDetail;