import React from "react";
import OverallPerformance from "./OverallPerformance";
import SharesDetail from "./SharesDetail";

const SharesShow = ({
  share,
  clicked,
  removeShare,
  setClicked,
  findShareInDBfromShares,
  shareHistory,
  shareNames,
  shares,
}) => {
  return (
    <div className="border-4 border-teal-400 shadow-xl shadow-teal-800 rounded-2xl bg-white p-10">
      {clicked ? (
        <SharesDetail
          share={share}
          removeShare={removeShare}
          setClicked={setClicked}
          findShareInDBfromShares={findShareInDBfromShares}
          shareHistory={shareHistory}
        />
      ) : (
        <OverallPerformance shareNames={shareNames} shares={shares} />
      )}
    </div>
  );
};

export default SharesShow;
