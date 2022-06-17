import React, { useState } from "react";

const TotalValue = ({ shareNames, shares }) => {
  const totalValueOverall = () => {
    let runningTotal = 0;

    shares.forEach((share) => {
      shareNames.forEach((dbData) => {
        if (share.data.id == dbData.name) {
          let totalValue = share.data.priceUsd * dbData.shares_held;
          runningTotal += totalValue;
        }
      });
    });

    return Math.round(runningTotal);
  };

  const totalValuee = totalValueOverall();

  return (
    <div>
      <h3 className=' underline mb-2'>
        <strong>Total Value Of Your Shares:</strong> ${totalValuee.toFixed(2)}
      </h3>
    </div>
  );
};
export default TotalValue;
