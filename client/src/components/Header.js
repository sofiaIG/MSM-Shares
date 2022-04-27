import React from 'react';
import NewShare from './NewShare';
import './Header.css'

const Header = ({handleFormClick}) => {


    return (
        <div>
            <NewShare handleFormClick={handleFormClick}/>
            <h2>MSM Shares</h2>
        </div>
    );
}

export default Header;