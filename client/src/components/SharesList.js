import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, handleShareClicked}) => {
    const shareList = shares.map((share, index) => {
        return <SharesItem share = {share} key = {index} handleShareClicked={handleShareClicked}/>
    })

    return(
        <div>
            {shareList}
            </div>
    );
}

export default SharesList;