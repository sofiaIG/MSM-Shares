import React, { useState } from "react";
import { postShares } from "../components/SharesService";

const NewShareForm = ({ fetchNewShare, handleFormClick }) => {
  const [name, setName] = useState("");
  const [shares_held, setNumberShares] = useState(0);
  const [buy_price, setBuy_Price] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleShares = (event) => setNumberShares(event.target.value);
  const handleBuyPrice = (event) => setBuy_Price(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const shares = {
      name,
      shares_held,
      buy_price,
    };
    fetchNewShare(shares);
    setName("");
    setNumberShares(0);
    setBuy_Price(0);
    handleFormClick();
  };

  return (
    <form onSubmit={handleSubmit} className='border shadow-md mt-10 p-12 rounded'>
      <h2 className='text-center text-lg font-semibold mb-4 text-teal-900 underline'>Add a Crypto</h2>
      <div className='m-3'>
        <label htmlFor="name">Name of the Crypto: </label>
        <input
          className='border border-teal-200 ml-3 rounded-md'
          onChange={handleName}
          value={name}
          type="text"
          id="name"
          required
        />
      </div>
      <div className="m-3">
        <label className='mr-10' htmlFor="shares_held">Number to Purchase: </label>
        <input
          className='border border-teal-200 rounded-md'
          onChange={handleShares}
          value={shares_held}
          type="number"
          min="1"
          max="50"
          id="number-of-shares"
          required
        />
      </div>
      <div className="m-3">
        <label htmlFor="buy_price">Buy price: </label>
        <input
          className='border border-teal-200 ml-3 rounded-md'
          onChange={handleBuyPrice}
          value={buy_price}
          type="number"
          required
          id="buy-price"
        />
      </div>
      <button className='bg-white hover:bg-teal-300 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded hover:transform 'type="submit" id="save">
        Save
      </button>
    </form>
  );
};
export default NewShareForm;
