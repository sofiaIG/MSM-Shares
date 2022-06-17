import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const SharesDetail = ({
  share,
  removeShare,
  setClicked,
  findShareInDBfromShares,
  shareHistory,
}) => {
  const newShare = () => {
    let newShareHistory;

    shareHistory.forEach((object) => {
      if (Object.keys(object)[0] == share.data.id) {
        newShareHistory = object;
        return;
      }
    });
    return newShareHistory;
  };

  const thisShareHistroy = newShare();

  const shareData = thisShareHistroy[share.data.id];

  const newArrayWithPrice = shareData.data.map((object) => {
    return object.priceUsd;
  });

  const newArrayWithTime = shareData.data.map((object) => {
    return object.date;
  });
  const shareInDatabase = findShareInDBfromShares(share);

  const totValueOfShare = () => {
    return share.data.priceUsd * shareInDatabase.shares_held;
  };

  console.log(newArrayWithTime);

  const sliceTime = newArrayWithTime.slice(641, 671);
  const slicePrice = newArrayWithPrice.slice(641, 671);

  const handleDelete = () => {
    removeShare(share);
    setClicked(false);
  };
  const xlabel = sliceTime;
  const ylabel = slicePrice;
  const state = {
    labels: xlabel,
    datasets: [
      {
        label: share.data.name,
        fill: false,
        lineTension: 0.7,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.5,
        data: ylabel,
      },
    ],
  };

  const totalVal = totValueOfShare();

  return (
    <>
      <div>
        <div className=''>
          <Line
            data={state}
            width={500}
            height={200}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: `The ${share.data.name} chart`,
                },
              },
            }}
          />
        </div>
        <div className="details">
          <div className='flex justify-evenly mt-6  pt-4 text-lg text-teal-400 border-t-2 border-teal-700'>
            <p>
              <strong>Name: </strong>
              {share.data.name}
            </p>
            <p>
              <strong>Symbol: </strong>
              {share.data.symbol}
            </p>
          </div>
          <div className='flex justify-evenly mt-2 text-lg text-teal-400'>
            <p>
              <strong>Price: </strong>
              {share.data.priceUsd}
            </p>
            <p className="text-lg text-teal-400">
              <strong>Shares held: </strong>
              {shareInDatabase.shares_held}
            </p>
          </div>
          <p className=' text-center mt-3 text-lg text-teal-400'>
            <strong>Total Value of Share Held: </strong>${totalVal.toFixed(2)}
          </p>
          <button className='bg-white hover:bg-teal-300 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded hover:transform' onClick={handleDelete} id="sell-button">
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default SharesDetail;
