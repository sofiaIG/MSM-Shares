import React from 'react'; 


const SharesDetail = ({share, removeShare, setClicked}) => {

    const handleDelete = () => {
        removeShare(share._id);
        setClicked(false);
    }

    return (
        <div className='share-detail'>
            <h4>GRAPH</h4>
            <p><strong>Symbol: </strong>{share["Meta Data"]["2. Symbol"]}</p>
            <p><strong>Time Zone: </strong>{share["Meta Data"]["6. Time Zone"]}</p>
            <p>Profit: </p>
            <p>Shares held: </p>
            <button onClick={handleDelete}>Sell</button>
        </div>
    );
}

export default SharesDetail;