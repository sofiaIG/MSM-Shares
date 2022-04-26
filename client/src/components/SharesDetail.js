import React from 'react'; 


const SharesDetail = ({share, removeShare, setClicked, findShareInDBfromShares}) => {

    const shareInDatabase=findShareInDBfromShares(share);

    const totValueOfShare = () => {
        return share.data.priceUsd * shareInDatabase.shares_held;
    }

    const handleDelete = () => {
        removeShare(share);
        setClicked(false);
    }

    const totalVal = totValueOfShare();


    return (
        <div className='share-detail'>
            <h4>GRAPH</h4>
            <p><strong>Name: </strong>{share.data.name}</p>
            <p><strong>Symbol: </strong>{share.data.symbol}</p>
            <p><strong>Price: </strong>{share.data.priceUsd}</p>
            <p><strong>Shares held: </strong>{shareInDatabase.shares_held}</p>
            <p><strong>Total Value of Share Held: ${totalVal.toFixed(2)}</strong></p>
            <button onClick={handleDelete}>Sell</button>
        </div>
    );
}

export default SharesDetail;