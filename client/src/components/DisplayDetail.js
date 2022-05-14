import React from "react";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const DisplayDetail = ({ share }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const sharesPerPage = 4;
  const pagesVisited = pageNumber * sharesPerPage;

  const displayShare = share
    .slice(pagesVisited, pagesVisited + sharesPerPage)
    .map((share) => {
      return (
        <div className='border border-teal-400 m-3 p-4 shadow-md rounded-lg shadow'>
          <p className='text-teal-400 font-semibold p-2 border-b'>Name: {share.id}</p>
          <p className='text-teal-600 p-2'>Supply: {share.supply}</p>
          <p className='text-teal-600 p-2'>MaxSupply: {share.maxSupply}</p>
          <p className='text-teal-600 p-2'>PriceUSD: {share.priceUsd}</p>
          <br></br>
        </div>
      );
    });

  const pageCount = Math.ceil(share.length / sharesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className='ml-6 content-center'>
      {/* {console.log(share)} */}
      <h2 className='mt-4 mb-5 text-center text-lg text-semibold text-teal-900'>Display Of All Current Crypto Currenices</h2>
      <div className='flex flex-wrap'>
        {displayShare}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'flex flex-wrap justify-center'}
        previousLinkClassName={"'bg-white hover:bg-teal-300 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded'"}
        nextLinkClassName={' p-2 bg-white hover:bg-teal-300 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded hover:transform'}
        disabledClassName={''}
        activeClassName={"bg-teal-400 border-teal-500 text-white p-1"}
      />
    </div>
  );
};

export default DisplayDetail;
