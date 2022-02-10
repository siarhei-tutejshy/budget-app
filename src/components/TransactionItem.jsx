import { NavLink } from 'react-router-dom';
import '../App.css'

const TransactionItem = ({name, date, description, price, id, type, onDeleteTransaction}) => {
    const deleteTransaction = (e) => {
        e.stopPropagation()
        onDeleteTransaction(id)

    }
    return (
        <div className="transaction">
            <NavLink className="transaction"to={`/transaction/${id}`}>
                <div className='name'>{name}</div>
                <div >{date}</div>
            </NavLink>
            <div className='price'>{ type === "2" ? "+" : "-"}${price}
                <div className='remove' onClick={deleteTransaction}></div>
            </div>
                
                
        </div>
    );
};

export default TransactionItem