import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, handleShareClicked, selectedShare}) => {

    const shareList = shares.map((share, index) => {
        return <SharesItem key={index} share={share} handleShareClicked={handleShareClicked} selectedShare={selectedShare}/>
    });
    
    return(
        <div className='share-list'>
            {shareList}
        </div>
    );
}

export default SharesList;