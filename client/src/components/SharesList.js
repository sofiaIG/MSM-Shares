import React from 'react';
import SharesItem from "./SharesItem";

const SharesList = ({shares, index}) => {
    const shareList = shares.map((share) => {
        return <SharesItem share = {share} index = {index} />
    })
    
    return(
        <div>
            {shareList}
            {/* <p>I am the SharesList </p> */}
            </div>
    );
}

export default SharesList;