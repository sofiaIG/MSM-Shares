
import { getShares, deleteShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import NewShareForm from "../components/NewShareForm";
import SharesList from "../components/SharesList";
import SharesShow from "../components/SharesShow";
import TotalValue from "../components/TotalValue";
import MainChart from "../components/MainChart";


const MainPage =({formClicked})=>{

    const [shares, setShares] = useState(null);
    const [shareClicked, setShareClicked] = useState(false);
    const [selectedShare, setSelectedShare] = useState(null);
    const [shareNames, setShareNames] = useState(null);
    const [shareHistory, setShareHistory] = useState(null);
    const [shareDataLoaded, setloaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        fetchFromDatabase();
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    }, [])

    const fetchFromDatabase = () => {
        fetch('http://localhost:9000/api/shares')
        .then(res => res.json())
        .then(data => setShareNames(data));
    }

    useEffect(() => {
        if (shareNames != null) {
        setShares(loadShareData(getShareNames()));
        // setShareHistory(loadShareHistory(getShareNames()));
        }
    }, [shareNames])

    useEffect(() => {
        if (shares != null) {
            setloaded(true);
        }
    }, [shares])


    const getShareNames = () => {
        let sharesMapped = shareNames.map((object) => {
            return object.name
        })
        return sharesMapped;
    }

    const loadShareData = (names) => {
        let shareData = [];
        

        names.forEach((name) => {
            fetchSharesJSON(name).then(data => shareData.push(data));
        });

        return shareData;
    }

    const loadShareHistory = (names) => {
        let shareHistoryData = [];
        names.forEach((name) => {
            fetchShareHistroyJSON(name).then(data => shareHistory.push(data))
        });
        return shareHistoryData;
    }
    

    const fetchShareHistroyJSON = async (name) => {
        const response = await fetch(`https://api.coincap.io/v2/assets/${name}/history?interval=m15`);
        const theShareHistory = await response.json();
        return theShareHistory;
    }

    const fetchSharesJSON = async (name) => {
        const response = await fetch(`https://api.coincap.io/v2/assets/${name}`);
        const theShareData = await response.json();
        return theShareData;
    }

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

    const handleShareClicked = (share) => {
        setSelectedShare(share);
        setShareClicked(true);
    }

    return (
        <>
         <div className="main-page">
            { formClicked ? <NewShareForm addShare = {addShare}/> : null}
            {shareDataLoaded ? <SharesList shares = {shares} handleShareClicked={handleShareClicked} />: null}
            <SharesShow share={selectedShare} clicked={shareClicked} removeShare={removeShare} setClicked={setShareClicked}/>
            {shareDataLoaded ? <TotalValue shareNames={shareNames} shares={shares} /> : null}
        </div>
        <br></br>
        <div>
        <MainChart />
        </div>
        <br></br>
        </>

    )
}

export default MainPage;