import React from 'react';
import NewShare from './NewShare';

const Header = ({handleFormClick}) => {


    return (
        <div className='header'>
            <NewShare handleFormClick={handleFormClick}/>
            <h2>I am Header</h2>
        </div>
    );
}

export default Header;