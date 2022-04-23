import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked}) => {


    return (
        <>
            {clicked ? <SharesDetail share={share}/> : <OverallPerformance />}
        </>
    );
}

export default SharesShow;