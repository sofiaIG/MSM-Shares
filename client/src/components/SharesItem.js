const SharesItem = ({share, index, handleShareClicked}) => {

    const handleClick = () => {
        handleShareClicked(share);
    }


    return(
        <div onClick={handleClick}>
            {share["Meta Data"]["2. Symbol"]}
            <p>I am the SharesList </p>

        </div>
    );

    }
export default SharesItem;