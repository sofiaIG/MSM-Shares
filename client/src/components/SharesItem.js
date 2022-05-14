import { useTabContext } from "@material-ui/lab";
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

  const currentPL = calculatePL();

  return (
    <div
      className={ share === selectedShare ? ' flex m-3 flex-wrap text-white font-bold border p-3 bg-teal-600 border-teal-500 rounded-xl' : 'flex m-3 flex-wrap text-teal-400 font-bold border p-3 bg-white border-teal-500 rounded-xl hover:bg-teal-300 hover:text-white'}
      onClick={handleClick}
    >
      <li className='mx-2 border-l p-1'>Name: {share.data.name} </li>
      <li className='mx-2 border-l p-1'>Symbol: {share.data.symbol}</li>
      <li className='mx-2 border-l p-1'>
        Price: ${parseFloat(share.data.priceUsd).toFixed(2)}
      </li>
      <li className={(currentPL >= 0 ? 'mx-2 border-l p-1 text-green-300' : 'mx-2 border-l p-1 text-red-600')}>
        Profit/Loss: ${currentPL >= 0 ? "+" : null}
        {currentPL.toFixed(3)}
      </li>
      <br></br>
    </div>
  );
};

export default SharesItem;
