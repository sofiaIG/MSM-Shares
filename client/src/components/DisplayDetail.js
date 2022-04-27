const DisplayDetail =({share})=>{


    return(
        <div class = "display-detail">
            <div>
                <p>Name: {share.name}</p>
                <p>Supply: {share.supply}</p>
                <p>MaxSupply: {share.maxSupply}</p>
                <p>PriceUSD: {share.priceUsd}</p>
                <br></br>
            </div>
        </div>

    )

}

export default DisplayDetail;