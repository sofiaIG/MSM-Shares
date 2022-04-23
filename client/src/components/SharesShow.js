import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked, removeShare}) => {


    return (
        <>
            {clicked ? <SharesDetail share={share} removeShare={removeShare}/> : <OverallPerformance />}
        </>
    );
}

export default SharesShow;