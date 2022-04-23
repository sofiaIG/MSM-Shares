import { getShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import SharesList from "../components/SharesList";

const MainPage =()=>{

    const [shares, setShares] = useState([]);

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
    }
    
    return (
        <>
            <SharesList />
        </>
    )
}

export default MainPage;