import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveEcpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;
