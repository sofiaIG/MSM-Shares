
import { getShares, deleteShares, postShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import NewShareForm from "../components/NewShareForm";
import SharesList from "../components/SharesList";
import SharesShow from "../components/SharesShow";
import TotalValue from "../components/TotalValue";


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
        setShareHistory(loadShareHistory(getShareNames()));
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
            fetchShareHistroyJSON(name).then(data => shareHistoryData.push(restructureToObject(name, data)))
        });

        console.log(shareHistoryData)
        return shareHistoryData;
    }

    const fetchShareHistroyJSON = async (name) => {
        const response = await fetch(`https://api.coincap.io/v2/assets/${name}/history?interval=m30`);
        const theShareHistory = await response.json();
        return theShareHistory;
    }

    const fetchSharesJSON = async (name) => {
        const response = await fetch(`https://api.coincap.io/v2/assets/${name}`);
        const theShareData = await response.json();
        return theShareData;
    }

    const restructureToObject = (inputName, data) => {
        const lobject = {};
        lobject[inputName] = data;
        return lobject
    }

    const addShare =(share) =>{
        setloaded(false);
        const tempShareNames = shareNames.map(s=>s);
        tempShareNames.push(restructureNewShare(share));
        setShareNames(tempShareNames);
        const tempShares = shares.map(s=>s);
        fetchSharesJSON(share.name).then(data => tempShares.push(data));
        setShares(tempShares);
        postShares(share)
    }

    const restructureNewShare = (share) => {
        console.log(share.shares_held);
        let newSharesHeld = parseFloat(share.shares_held);
        return {name: share.name, shares_held: newSharesHeld}
    }

    const removeShare = (share) =>{
        const temp = shares.map(s=>s);
        const indexToDel = temp.indexOf(share)
        temp.splice(indexToDel, 1)
        setShares(temp);
        const databaseShare = findShareInDBfromShares(share);
        deleteShares(databaseShare._id);
    }

    const findShareInDBfromShares = (share) => {
        let foundShare;

        shareNames.forEach( (shareObject) => { 
            if (share.data.id == shareObject.name) {
                foundShare = shareObject
                return
            }})
        
        return foundShare;
    }
    

    const handleShareClicked = (share) => {
        setSelectedShare(share);
        setShareClicked(true);
    }

    return (
        <div className="main-page">
            { formClicked ? <NewShareForm addShare = {addShare}/> : null}
            {shareDataLoaded ? <SharesList shares = {shares} handleShareClicked={handleShareClicked} />: null}
            <SharesShow share={selectedShare} clicked={shareClicked} removeShare={removeShare} setClicked={setShareClicked} findShareInDBfromShares={findShareInDBfromShares}/>
            {shareDataLoaded ? <TotalValue shareNames={shareNames} shares={shares} /> : null}
        </div>
   

    )
}

export default MainPage;