import React,{ useState } from "react";

const SharesItem = ({
  share,
  handleShareClicked,
  selectedShare,
  shareNames,
}) => {
  const handleClick = () => {
    handleShareClicked(share);
  };

  const findCurrentShareInShareNames = () => {
    const foundShare = shareNames.filter((object) => {
      return object.name == share.data.id;
    });
    return foundShare[0];
  };

  const calculatePL = () => {
    const thisShare = findCurrentShareInShareNames();
    let pl = share.data.priceUsd - thisShare.buy_price;
    let totalPL = pl * thisShare.shares_held;
    return totalPL;
  };
  console.log('rendering: ', share, shareNames)
  const currentPL = calculatePL();

  return (
    <div
      className={"shares-item" + (share == selectedShare ? "-selected" : "")}
      onClick={handleClick}
    >
      <p className="item">Name: {share.data.name} </p>
      <p className="item">Symbol: {share.data.symbol}</p>
      <p className="item">
        Price: ${parseFloat(share.data.priceUsd).toFixed(2)}
      </p>
      <p className={"item" + (currentPL >= 0 ? "-profit" : "-loss")}>
        Profit/Loss: ${currentPL >= 0 ? "+" : null}
        {currentPL.toFixed(3)}
      </p>
      <br></br>
    </div>
  );
};

export default SharesItem;
