import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked, removeShare, setClicked, shareHistory}) => {


    return (
        <>
            {clicked ? <SharesDetail share={share} removeShare={removeShare} setClicked={setClicked} shareHistory = {shareHistory}/> : <OverallPerformance />}
        </>
    );
}

export default SharesShow;