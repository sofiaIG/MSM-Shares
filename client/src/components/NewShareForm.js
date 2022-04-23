import React, { useState } from 'react';

const NewShareForm = (addShare) => {
    const [name, setName] = useState('');
    const [numberShares, setNumberShares] = useState(0)

    const handleName =event => setName(event);
    const handleShares = event => setNumberShares(event)

    const handleSubmit =(event) =>{
        event.preventDefault();
        const shares = {
            name,
            numberShares
        }
        addShare(shares);
        setName = ('');
        setNumberShares = (0)

    }

    return (
        <form onSubmit={handleSubmit} id = 'shares-form'>
            <h2>Add a share</h2>
            <div>
                <label htmlFor='name'>Name of the Company: </label>
                <input onChange={handleName} type = 'text' id = 'name'/>
            </div>
            <div>
                <label htmlFor='number-of-shares'>Number of Shares: </label>
                <input onChange={handleShares} type = 'number' min = '1'
                max = '50' id = 'number-of-shares'/>
            </div>
            <input type="submit" value="Save" id="save"/>
        </form>
    );
}
export default NewShareForm;