import React, { useContext } from 'react';
import {TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
 
const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'Delete Expense',
      payload: props.id
    });
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span className='btn btn-sm btn-primary mr-3 pr-10' style={{width: 50}}>
          ${props.cost}
        </span> 
        <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;