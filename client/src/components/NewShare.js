import React from 'react';
import './NewShare.css';


const NewShare = ({handleFormClick}) => {

    const handleClick = () => {
        handleFormClick()
    }

    return (
       
        <button  onClick={handleClick}>New Share</button>
    );
}

export default NewShare;