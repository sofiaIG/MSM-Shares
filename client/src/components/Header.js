import React from 'react';
import NewShare from './NewShare';

const Header = ({handleFormClick}) => {


    return (
        <div className='header'>
            <h2>I am Header</h2>
            <NewShare handleFormClick={handleFormClick}/>
        </div>
    );
}

export default Header;