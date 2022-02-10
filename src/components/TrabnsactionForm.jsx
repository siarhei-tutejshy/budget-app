import { useState } from 'react';
import '../App.css'

const TransactionForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('2')

    const setTransaction = () => {
        const transaction = {
            name,
            description,
            price,
            type,
        };
        props.onAddTransaction(transaction);
    };

    return (
        <div className='form__container'>
            <form>
                <p>Name: <input placeholder='name'type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></p>
                <p>Price: <input placeholder='price' type="text" value={price}
                                    onChange={(e) => { setPrice(e.target.value)}}/>
                </p>                       
                                   
                <p className='income'>income/expense 
                    <select onChange={(e) => {setType(e.target.value);}}>                                          
                        <option value="1">expense</option>
                        <option selected value="2">income</option>
                    </select>
                </p>
                <input placeholder='description' type="text" value={description}
                        onChange={(e) => {setDescription(e.target.value)}}/>
                
                <button className='add form__add' onClick={setTransaction}>add</button>
            </form>
        </div>
    );
};

export default TransactionForm;
