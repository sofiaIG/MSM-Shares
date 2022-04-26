import React from 'react'; 


const SharesDetail = ({share, removeShare, setClicked}) => {

    const handleDelete = () => {
        removeShare(share);
        setClicked(false);
    }

    return (
        <div className='share-detail'>
            <h4>GRAPH</h4>
            <p><strong>Name: </strong>{share.data.name}</p>
            <p><strong>Symbol: </strong>{share.data.symbol}</p>
            <p><strong>Price: </strong>{share.data.priceUsd}</p>
            <p>Profit: </p>
            <p>Shares held: </p>
            <button onClick={handleDelete}>Sell</button>
        </div>
    );
}

export default SharesDetail;