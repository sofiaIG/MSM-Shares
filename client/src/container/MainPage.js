
import { getShares, deleteShares } from "../components/SharesService";
import React, { useState, useEffect } from 'react';
import NewShareForm from "../components/NewShareForm";
import SharesList from "../components/SharesList";
import SharesShow from "../components/SharesShow";


const MainPage =({formClicked})=>{

    const [shares, setShares] = useState([]);
    const [shareClicked, setShareClicked] = useState(false);
    const [selectedShare, setSelectedShare] = useState(null);
    const [apiData, setApiData] = useState([]);
    const [shareNames, setShareNames] = useState(null)


    useEffect(()=>{
        getShares().then((savedShares)=>{
            setShareNames(savedShares);
        })
    }, [])

    useEffect(() => {
        if (shareNames) {
        loadShareData(getShareNames());
        }
    }, [shareNames])

    const getShareNames = () => {
        let sharesMapped = shareNames.map((object) => {
            return object.name
        })
        return sharesMapped;
    }

    const loadShareData = (names) => {
        let shareData = []
        names.forEach((name) => {
            fetch(`https://api.coincap.io/v2/assets/${name}`)
            .then(res => res.json())
            .then(data => shareData.push(data))
        })

        setShares(shareData)

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

    // const loadShares = () => {

    //     const shareData = [];

    //     const savedShares = [];
        
    //     getShares().then(data => {
    //         // savedShares.push(data)
    //         // console.log(data[0])
    //         for(let i=0; i<data.length; i++){
    //             savedShares.push(data[i]);
    //         }
    //     } )

    //     // console.log(savedShares)

    //     const mappingFunc = (data) => {
    //         data.map((object) => {return object.name})
    //     }

    //     const shareNames = mappingFunc(savedShares);

    //     console.log(shareNames);

        // shareNames.forEach((name) => {
        //     fetch(`https://api.coincap.io/v2/assets/${name}`)
        //     .then(res => res.json())
        //     .then((data) => {
        //         shareData.push(data)
        //     });
            
    //     // });
 
    //     setShares(shareData);
    // }

    const handleShareClicked = (share) => {
        setSelectedShare(share);
        setShareClicked(true);
    }

    return (
        <div className="main-page">



            {/* { formClicked ? <NewShareForm addShare = {addShare}/> : null}
            <SharesList shares = {shares} handleShareClicked={handleShareClicked} />
            <SharesShow share={selectedShare} clicked={shareClicked} removeShare={removeShare} setClicked={setShareClicked}/> */}
    </div>
   

    )
}

export default MainPage;