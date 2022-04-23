import SharesItems from "./SharesItem";

const SharesList = ({shares, index}) => {
    const sharesList = shares.map((share) =>{
        return <SharesItems share = {share} index = {index} />
    })

    return(
        <div>
            {/* <p>I am the SharesList </p> */}
            {sharesList}
            </div>
    );

}

export default SharesList;