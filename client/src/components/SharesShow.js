import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked, removeShare, setClicked}) => {


    return (
        <>
            {clicked ? <SharesDetail share={share} removeShare={removeShare} setClicked={setClicked}/> : <OverallPerformance />}
        </>
    );
}

export default SharesShow;