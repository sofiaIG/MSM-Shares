<<<<<<< HEAD
import ReactPaginate from "react-paginate";
import { useState } from "react";
import './DisplayDetail.css'


=======
import React from "react";
>>>>>>> develop
const DisplayDetail =({share})=>{
    const [pageNumber, setPageNumber] = useState(0);


<<<<<<< HEAD
    const sharesPerPage = 5;
    const pagesVisited = pageNumber * sharesPerPage;

    const displayShare = share
    .slice(pagesVisited, pagesVisited + sharesPerPage)
    .map((share) => {
      return (
        <div>
                <p>Name: {share.name}</p>
=======
    return(
        <div class = "display-detail">
            <div>
                <p>Name: {share.id}</p>
>>>>>>> develop
                <p>Supply: {share.supply}</p>
                <p>MaxSupply: {share.maxSupply}</p>
                <p>PriceUSD: {share.priceUsd}</p>
                <br></br>
        </div>
      );
    });


    const pageCount = Math.ceil(share.length / sharesPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
     };


    return(
        <div className="App">
            {/* {console.log(share)} */}
        <h2>Display All Current Shares</h2>
        {displayShare}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
      />
    </div>

    )

}

export default DisplayDetail;