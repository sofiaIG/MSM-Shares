import React from 'react';
import NewShare from './NewShare';
import './Header.css'

const Header = ({handleFormClick}) => {


    return (
        <div className = "header">
            <h2 className = "h2" >MSM Shares</h2>
            <NewShare handleFormClick={handleFormClick}/>
        </div>
    );
}

export default Header;