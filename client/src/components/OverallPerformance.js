import React from 'react';

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

        console.log(array)
    }

    const arrayOfPrices = makeArrayOfTotalPrices();


    return (
        <>
            <h3>{arrayOfPrices}</h3>
        </>
    );
}
export default OverallPerformance;