import React from 'react';
import OverallPerformance from './OverallPerformance';
import SharesDetail from './SharesDetail';

const SharesShow = ({share, clicked, removeShare, setClicked, findShareInDBfromShares, shareHistory}) => {

    return (
        <div className='share-list'>
            {clicked ? <SharesDetail share={share} removeShare={removeShare} setClicked={setClicked} findShareInDBfromShares={findShareInDBfromShares} shareHistory = {shareHistory}/> : <OverallPerformance />}
        </div>
    );
}

export default SharesShow;