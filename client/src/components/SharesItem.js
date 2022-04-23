const SharesItem = ({share, index, handleShareClicked}) => {

    const handleClick = () => {
        handleShareClicked(share);
    }


    return(

        <div className = "shares-item" onClick={handleClick}>

            <p>Name: {share["Meta Data"]["2. Symbol"]} </p>
            <p>Interval: {share["Meta Data"]["4. Interval"]}</p>
            <p>Output Size: {share["Meta Data"]["5. Output Size"]}</p>
            <p>Time Zone: {share["Meta Data"]["6. Time Zone"]}</p>
            <br></br>
        </div>
    
    );

    }
export default SharesItem;