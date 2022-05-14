import React from "react";
import NewShare from "./NewShare";
import arrow from "../static/new-arrow.jpeg"

const Header = ({ handleFormClick }) => {
  return (
    <div className='flex justify-between p-6 bg-teal-400'>
      <h1 className=' text-2xl text-white font-extrabold mt-1 flex'>MSM Shares</h1>
      <NewShare handleFormClick={handleFormClick} />
    </div>
  );
};

export default Header;
