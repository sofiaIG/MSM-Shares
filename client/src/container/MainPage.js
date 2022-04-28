
import { getShares, deleteShares, postShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import NewShareForm from "../components/NewShareForm";
import SharesList from "../components/SharesList";
import SharesShow from "../components/SharesShow";
import TotalValue from "../components/TotalValue";
import DisplayAll from "../components/DisplayAll";

const MainPage =({formClicked, handleFormClick})=>{

    const [shares, setShares] = useState(null);
    const [shareClicked, setShareClicked] = useState(false);
    const [selectedShare, setSelectedShare] = useState(null);
    const [shareNames, setShareNames] = useState(null);
    const [shareHistory, setShareHistory] = useState(null);
    const [shareDataLoaded, setLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [allData, setAllData] = useState(null);

    useEffect(()=>{
        fetchFromDatabase();
        fetchPrices();
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
            loadShareData(getShareNames());
            loadShareHistory(getShareNames());
        }
    }, [shareNames])

    useEffect(()=>{
        fetchPrices();
    }, [])

    useEffect(() => {
        if (shares != null) {
            setLoaded(true);
        }
    }, [shares])


    const getShareNames = () => {
        let sharesMapped = shareNames.map((object) => {
            return object.name
        })
        return sharesMapped;
    }

    const loadShareData = (names) => {
        let allPromises = []

        names.forEach((name) => {
            allPromises.push(fetchSharesJSON(name));
        });

        Promise.all(allPromises)
            .then((values) => {
                setShares(values)
            })

        // return shareData;
    }

    const loadShareHistory = (names) => {
        let allPromises = [];
        let arrayOfNames = [];

        names.forEach((name) => {
            arrayOfNames.push(name);
            allPromises.push(fetchShareHistroyJSON(name))
        });
        
        Promise.all(allPromises)
            .then((values) => {
                let newValuesArray = []
                values.forEach((value, index) => {
                    let newObject = {}
                    newObject[arrayOfNames[index]] = value
                    newValuesArray.push(newObject);
                })
                setShareHistory(newValuesArray);
            })
    }
    const fetchPrices = () => {
            fetch("https://api.coincap.io/v2/assets/")
            .then(res => res.json())
            .then(data =>(setAllData(data)))
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

    const restructureToObject = (inputName, data) => {
        const lobject = {};
        lobject[inputName] = data;
        return lobject
    }
    
    const addShare =(shareData, share) =>{

        const tempShareNames = shareNames.map(s=>s);
        tempShareNames.push(restructureNewShare(share));
       

        const tempShares = shares.map(s=>s);
        tempShares.push(shareData);
        postShares(share)
            .then(() => {
                setShareNames(tempShareNames);
                setShares(tempShares);
                fetchFromDatabase();
            });

    }

    const addNewShareHistory = (shareData) => {
        const tempShareHistory = shareHistory.map(s=>s);
        tempShareHistory.push(shareData);
        setShareHistory(tempShareHistory);
    }

    const restructureNewShare = (share) => {
        let newSharesHeld = parseFloat(share.shares_held);
        return {name: share.name, shares_held: newSharesHeld}
    }

    const fetchNewShare = (share) => {

        const name = share.name;

        fetchSharesJSON(name)
        .then((data) => {
            console.log(data)
            console.log(data.hasOwnProperty('error'))
            if (!data.hasOwnProperty('error')) {
                addShare(data, share)
            } else {
                alert("Sorry, Couldn't find that crypto!")
            }
        }).catch(err => alert(err))


        fetchShareHistroyJSON(name)
        .then((data) => {
            if (!data.hasOwnProperty('error')) {
            addNewShareHistory(data) 
            } 
        }).catch(err => alert(err))
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
        <>

        <div className='new-share'>
        { formClicked ? <NewShareForm fetchNewShare={fetchNewShare} handleFormClick={handleFormClick}/> : null}
        <br></br>
        {formClicked ? <DisplayAll data={allData} /> : null}
        </div>
        <div>
        {shareDataLoaded ? <TotalValue shareNames={shareNames} shares={shares} /> : null}
        </div>
        <div className="main-page">
            {shareDataLoaded ? <SharesList shares = {shares} handleShareClicked={handleShareClicked} selectedShare={selectedShare}/>: null}
            {shareDataLoaded ? <SharesShow share={selectedShare} clicked={shareClicked} removeShare={removeShare} setClicked={setShareClicked} findShareInDBfromShares={findShareInDBfromShares} shareHistory = {shareHistory} shareNames={shareNames} shares={shares}/> : null}
        </div>
        <br></br>
        </>

    )
}

export default MainPage;