import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Transactions from './components/Transactions';
import Transaction from './components/Transaction';
import { useState } from 'react';
import './App.css';
export const Context = React.createContext();

function App() {
    const [totalCount, setTotalCount] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let totalCounter = JSON.parse(localStorage.getItem('totalCount'));
        let transactionList = JSON.parse(localStorage.getItem('transactions'));

        if (transactionList) {
            setTransactions(transactionList);
            setTotalCount(totalCounter);
        }
    }, []);

    useEffect(() => {
        let counter = transactions.reduce((acc, cur) => {
            if (cur.type === '2') return acc + parseFloat(cur.price);
            if (cur.type === '1') return acc - parseFloat(cur.price);
        }, 0);
        setTotalCount(counter);
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem('totalCount', JSON.stringify(totalCount));
    }, [totalCount]);

    return (
        <Context.Provider
            value={{ totalCount, setTotalCount, transactions, setTransactions }}
        >
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Main totalCount={totalCount} />}
                    ></Route>
                    <Route
                        path="/transactions/"
                        element={<Transactions />}
                    ></Route>
                    <Route
                        path="/transaction/:id/"
                        element={<Transaction />}
                    ></Route>
                </Routes>
            </Router>
        </Context.Provider>
    );
}

export default App;
