import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
  const {expenses, budget} = useContext(AppContext);

  // use reduce function to get all costs from the expenses array and add them 
  // const sum = expenses.map(item => item.cost).reduce((prev, curr) => prev + curr, 0);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
  
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;