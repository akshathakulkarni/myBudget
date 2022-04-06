import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 123123, name: "Shopping", cost: '$50' },
    { id: 123123, name: "Groceries", cost: '$300' },
    { id: 123123, name: "Fuel", cost: '$70' },
    { id: 123123, name: "Bills", cost: '$500' },
    { id: 123123, name: "Miscelleneaous", cost: '$40' },
  ];
  return (
    <ul className='list-group'>
      {expenses.map((expense) => {
        console.log('expense = ', expense);
        return <ExpenseItem 
          id={expense.id} 
          name={expense.name} 
          cost={expense.cost} />
      })}
    </ul>
  );
};

export default ExpenseList;