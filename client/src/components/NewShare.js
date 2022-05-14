import React from "react";

const NewShare = ({ handleFormClick }) => {
  const handleClick = () => {
    handleFormClick();
  };

  return (
   <button className='bg-white hover:bg-teal-300 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded hover:transform' onClick={handleClick}>New Share</button>
  )
};

export default NewShare;
