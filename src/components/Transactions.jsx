import { useContext, useState } from "react";
import TransactionForm from "./TrabnsactionForm";
import {Context} from '../App'
import TransactionItem from "./TransactionItem";
import { NavLink } from 'react-router-dom';

function Transactions(props) {

	const [showForm, setShowForm] = useState(false)
	const {totalCount,setTotalCount,transactions,setTransactions} = useContext(Context)
	
const onShowForm = () => {
	setShowForm(true)
}

const onAddTransaction = (transaction) => {
	setTransactions([...transactions, {
		id: Date.now(),
		name: transaction.name,
		description: transaction.description,
		price: transaction.price,
		type: transaction.type,
		date: new Date().toLocaleString()
	}]);
	setShowForm(false)

}
const onDeleteTransaction = (id) => {
	setTransactions(transactions.filter(item => item.id !== id))
}

	return (
		<div className="container transactions">
			<div className="header">
				<NavLink to="/" ></NavLink>
				<h2>Transactions</h2>
			</div>
			{transactions.length < 1 
				? <h3>No transactions</h3> 
				: <ul className="transactions__list">
					{transactions.map((tr,index) => (<TransactionItem key = {index} {...tr} onDeleteTransaction={onDeleteTransaction}/>))}
				  </ul>
			}
			{!showForm && <button className="add" onClick={onShowForm}>+</button>}
			{showForm && <TransactionForm onAddTransaction = {onAddTransaction}/> }
		</div>
	);
}

export default Transactions;
