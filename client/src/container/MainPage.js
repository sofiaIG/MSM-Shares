import { getShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';

const MainPage =()=>{

    const [shares, setShares] = useState([]);

    useEffect(()=>{
        getShares().then((allShares)=>{
            setShares(allShares)
        })
    })

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

        </>
    )
}

export default MainPage;