
const DisplayDetail =({share})=>{
    return(

      

        <>
        <p>Name: {share.name}</p>
        <p>Supply: {share.supply}</p>
        <p>MaxSupply: {share.maxSupply}</p>
        <p>PriceUSD: {share.priceUsd}</p>
        <br></br>
        </>

    )

}

export default DisplayDetail;