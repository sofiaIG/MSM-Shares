import React from "react";
import SharesItem from "./SharesItem";

const SharesList = ({
  shares,
  handleShareClicked,
  selectedShare,
  shareNames,
}) => {
  const shareList = shares.map((share, index) => {
    return (
      <SharesItem
        key={index}
        share={share}
        handleShareClicked={handleShareClicked}
        selectedShare={selectedShare}
        shareNames={shareNames}
      />
    );
  });

  return <div className=' border-2 border-teal-400 shadow-xl shadow-teal-800 rounded-2xl bg-teal-400 p-2'>
           <ul>{shareList}</ul>
          </div>;
};

export default SharesList;
