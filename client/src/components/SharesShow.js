import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked, removeShare, setClicked, findShareInDBfromShares}) => {


    return (
        <>
            {clicked ? <SharesDetail share={share} removeShare={removeShare} setClicked={setClicked} findShareInDBfromShares={findShareInDBfromShares}/> : <OverallPerformance />}
        </>
    );
}

export default SharesShow;