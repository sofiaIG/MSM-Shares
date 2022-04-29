import React from 'react';


const SharesItem = ({share, handleShareClicked, selectedShare, shareNames}) => {

    const handleClick = () => {
        handleShareClicked(share);
    }   

    const findCurrentShareInShareNames = () => {
        const foundShare = shareNames.filter((object) => {
            return object.name == share.data.id
        })
        return foundShare;
    }

    const calculatePL = () => {
        const thisShare = findCurrentShareInShareNames();
        let pl = share.data.priceUsd - thisShare.buy_price;
        let totalPL = pl * thisShare.shares_held;
        return totalPL;
    }

    const currentPL = calculatePL();
    console.log(currentPL)

    return(
        <div className = {"shares-item" + (share==selectedShare ? '-selected' : '')} onClick={handleClick}>
            <p class = "item">Name: {share.data.name} </p>
            <p class = "item">Symbol: {share.data.symbol}</p>
            <p class = "item">Price: ${parseFloat(share.data.priceUsd).toFixed(2)}</p>
            <p class = "item">Profit/Loss: ${currentPL.toFixed(3)}</p>
            <br></br>
        </div>
    );

}

export default SharesItem;