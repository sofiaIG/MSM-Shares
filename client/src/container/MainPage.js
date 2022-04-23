import { getShares, deleteShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import SharesList from "../components/SharesList";
import SharesShow from "../components/SharesShow";

const MainPage =()=>{

    const [shares, setShares] = useState([]);
    const [shareClicked, setShareClicked] = useState(false);
    const [selectedShare, setSelectedShare] = useState(null)

    useEffect(()=>{
        getShares().then((allShares)=>{
            setShares(allShares)
        })
    }, [])

    const addShare =(share) =>{
        const temp = shares.map(s=>s);
        temp.push(share);
        setShares(temp);
    }

    const removeShare = (id) =>{
        const temp = shares.map(s=>s);
        const indexToDel =  temp.map(s=>s._id).indexOf(id);
        temp.splice(indexToDel, 1);
        setShares(temp);
        deleteShares(id)

    }


    //REMOVE WHEN DONE WITH ADDING FEATURE ALONG WITH THE BUTTON
    const tempHandleClick = () => {
        setSelectedShare(shares[1])
        setShareClicked(true);
    }

    return (
        <>
            <SharesList />
            <button onClick={tempHandleClick}>CLICK ME</button>
            <SharesShow share={selectedShare} clicked={shareClicked} removeShare={removeShare} setClicked={setShareClicked}/>
        </>
    )
}

export default MainPage;