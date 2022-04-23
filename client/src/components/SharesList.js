import SharesItems from "./SharesItem";

const SharesList = ({shares}) => {
    const sharesList = shares.map((share) =>{
        return <SharesItems share = {share} />
    })

    return(
        <div>
            {/* <p>I am the SharesList </p> */}
            {sharesList}
            </div>
    );

}

export default SharesList;