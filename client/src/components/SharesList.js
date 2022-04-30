import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, handleShareClicked, selectedShare, shareNames}) => {

    const shareList = shares.map((share, index) => {
        return <SharesItem key={index} share={share} handleShareClicked={handleShareClicked} selectedShare={selectedShare} shareNames={shareNames}/>
    });
    
    return(
        <div className='share-list'>
            {shareList}
        </div>
    );
}

export default SharesList;