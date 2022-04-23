import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, index}) => {
    const shareList = shares.map((share) => {
        return <SharesItem share = {share} index = {index} />
    })
    
    return(
        <div>
            {shareList}
            </div>
    );
}

export default SharesList;