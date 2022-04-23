import React from 'react'; 


const SharesDetail = ({share, removeShare}) => {

    const handleDelete = () => {
        removeShare(share._id)
    }

    return (
        <>
            <h4>GRAPH</h4>
            <p><strong>Symbol: </strong>{share["Meta Data"]["2. Symbol"]}</p>
            <p><strong>Time Zone: </strong>{share["Meta Data"]["6. Time Zone"]}</p>
            <p>Profit: </p>
            <p>Shares held: </p>
            <button onClick={handleDelete}>Sell</button>
        </>
    );
}

export default SharesDetail;