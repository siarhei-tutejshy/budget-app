import '../App.css'
import React from 'react'
import picture from '../assets/picture.svg'
import { NavLink } from 'react-router-dom';

function Main({totalCount}) {

	return (
		<div className="container main">
			<img className="picture" src={picture} alt="#" />
			<h3>Your balance</h3>
			<p>{totalCount}</p>
			<NavLink calssName ='start' to="/transactions/">All transactions</NavLink>
		</div>
	);
}

export default Main;
