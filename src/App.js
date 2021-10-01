import React from 'react';
import './App.css';
import Header from './(1) Header';
import { Balance } from './(2) Balance';
import { IncomeExpense } from './(3) Income & Expense';
import { TransactionList } from './(4) Transaction List';
import { AddTransaction } from './(5) Add Transaction';
import { GlobalProvider } from './Context/Global State';

function App(){
  return (
    <GlobalProvider>
    <div>
      <Header/>
      <div className = "container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;