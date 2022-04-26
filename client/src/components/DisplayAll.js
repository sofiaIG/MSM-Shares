import DisplayDetail from "./DisplayDetail";

const DisplayAll = ({data})=>{

const listOfShare = data.data

const shareList = listOfShare.map((share, index) => {
      return <DisplayDetail key={index} share={share} />
});

    return(
        <div>
        {shareList}
        
        
        </div>
    
    )
}

export default DisplayAll;