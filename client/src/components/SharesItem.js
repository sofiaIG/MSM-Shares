import React from 'react';


const SharesItem = ({share, handleShareClicked}) => {

    const handleClick = () => {
        handleShareClicked(share);
    }   
    
    
    return(
        <div className = "shares-item" onClick={handleClick}>
            <p>Name: {share.data.name} </p>
            <p>Symbol: {share.data.symbol}</p>
            <p>Price: ${parseFloat(share.data.priceUsd).toFixed(2)}</p>
            <br></br>
        </div>
    );

}

export default SharesItem;