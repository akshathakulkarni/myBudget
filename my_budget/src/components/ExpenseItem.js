import React from 'react';
import {TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  console.log( 'INnnnn')
  console.log('eachItem = ', props)
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span className='btn btn-sm btn-primary mr-3'>
          {props.cost}
        </span> 
        <TiDelete size='1.5em'></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;