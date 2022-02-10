import { useContext, useState } from "react";
import { NavLink, useParams, Link} from "react-router-dom";
import {Context} from '../App'
import '../App.css'

function Transaction(props) {
	const {transactions,setTransactions} = useContext(Context)
	const param = useParams().id
	const [editMode, setEditMode]= useState(false)
	const [item, setItem] = useState(transactions.find(tr => tr.id === +param ))

	const onEdit = () => {
		setEditMode(true) 
	}

	const onApplyEdit = () => {
		setEditMode(false)
		let trn = transactions.map(i => (i.id===item.id) ? item : i)
		setTransactions(trn)
	}

	const onDelete = () => {
		setTransactions(transactions.filter(tr => tr.id !== item.id))
	}
	
	return (
		<div className="container showTransact">
			{!item && <h3>loading</h3>}

			<div className="header">
				<NavLink to='/transactions'></NavLink>
				<h2>{item.date}</h2>
			</div>

			
			<div className="content__block">
				{editMode 
					?<input type="text" value={item.name} placeholder='name'
							onChange={(e)=> {setItem({...item, name: e.target.value})}}/>
					:<h1>{item.name}</h1>}

				{editMode 
					? <input type="text" value={item.price} placeholder='price' 
							onChange={(e)=> {setItem({...item, price: e.target.value})}}/>
					: <div className='price'>{item.type === "2" ? "+" : "-"}${item.price}</div>}
                    
				{editMode 
					?<input type="text" value={item.description} placeholder='description' 
							onChange={(e)=> {setItem({...item, description: e.target.value})}}/>
					:<div>{item.description}</div>}
			</div>
			<div>
				{editMode ? <button onClick={onApplyEdit}>apply</button>: <button onClick={onEdit}>Edit</button>}
				<Link to ='/transactions' className="delete" onClick={onDelete}>delete</Link>
			</div>
		</div>
	);
}

export default Transaction;
