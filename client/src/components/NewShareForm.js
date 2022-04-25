import React, { useState } from 'react';
import { postShares } from '../components/SharesService';


const NewShareForm = ({addShare}) => {
    const [name, setName] = useState('');
    const [numberShares, setNumberShares] = useState(0)

    const handleName =event => setName(event.target.value);
    const handleShares = event => setNumberShares(event.target.value)

    const handleSubmit =(event) =>{
        event.preventDefault();
        const shares = {
            name,
            numberShares
        }
        addShare(shares);
        setName('');
        setNumberShares(0)

    }

    return (
        <form onSubmit={handleSubmit} id = 'shares-form'>
            <h2>Add a share</h2>
            <div>
                <label htmlFor='name'>Name of the Company: </label>
                <input onChange={handleName} value ={name} type = 'text' id = 'name' required/>
            </div>
            <div>
                <label htmlFor='number-of-shares'>Number of Shares: </label>
                <input onChange={handleShares} value ={numberShares} type = 'number' min = '1'
                max = '50' id = 'number-of-shares' required/>
            </div>
            <button type="submit"  id="save">Save</button>
        </form>
    );
}
export default NewShareForm;