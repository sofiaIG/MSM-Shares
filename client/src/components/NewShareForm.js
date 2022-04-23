import React from 'react';
import React, { useState } from 'react';
import {postShares} from "../components/SharesService";

const NewShareForm = (addShares) => {
    const [newForm, setNewForm] = useState([])

    const onChange=(event)=>{
        newForm[event.target.id] = event.target.value;
        setNewForm(newForm);
    }

    const onSubmit =(event) =>{
        event.preventDefault();
        postShares(newForm).then((data)=>{   
            addShares(data);
        })

    }




    return (
        <form onSubmit={onSubmit} id = 'shares-form'>
            <h2>Add a share</h2>
            <div>
                <label htmlFor='name'>Name of the Company: </label>
                <input onChange={onChange} type = 'text' id = 'name'/>
            </div>
            <div>
                <label htmlFor='number-of-shares'>Number of Shares: </label>
                <input onChange={onChange} type = 'number' min = '1'
                max = '50' value ='0' id = 'number-of-shares'/>
            </div>



        </form>
    );
}
export default NewShareForm;