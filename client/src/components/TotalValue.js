import React,{useState} from 'react'; 


const TotalValue = ({shareNames, shares}) => {

    const [totalVal, setTotalVal] = useState(null)

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

        return runningTotal;;
    }

    const totalValuee = totalValueOverall();


    return (
        <>
            <h3>Total Value Your Shares: ${totalValuee}</h3>
        </>

    );
}
export default TotalValue;