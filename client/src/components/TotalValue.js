import React,{useState} from 'react'; 


const TotalValue = ({shareNames, shares}) => {


    const totalValueOverall = () => {
        let runningTotal = 0;

        shares.forEach((share) => {
            shareNames.forEach((dbData) => {
                if (share.data.id == dbData.name) {
                    let totalValue = share.data.priceUsd * dbData.shares_held
                    runningTotal += totalValue;
                }
            })
        })
        
        return Math.round(runningTotal);
    }

    const totalValuee = totalValueOverall();


    return (
        <div className='total-value'>
            <h3>Total Value Your Shares: ${totalValuee.toFixed(2)}</h3>
        </div>

    );
}
export default TotalValue;