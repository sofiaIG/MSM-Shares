
const DisplayDetail =({share})=>{
    return(
        <div>
        <p>Name: {share.name}</p>
        <p>Supply: {share.supply}</p>
        <p>MaxSupply: {share.maxSupply}</p>
        <p>PriceUSD: {share.priceUsd}</p>
        <br></br>
        </div>
    
    )

}

export default DisplayDetail;