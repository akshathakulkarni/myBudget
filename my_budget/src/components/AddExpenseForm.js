import React, {useState, useContext} from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();
   
    const newExpense = {
      id:uuidv4(),
      name:name,
      cost:parseInt(cost),
    };
    //pass dispatch actions(to update) down instead of callbacks
    dispatch({
      type: 'Add Expense',
      payload: newExpense
    });
    //Clear the input fields after submission
    setName('');
    setCost('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="col-sm">
        <div className="alert alert-success">
          <label for="name">Name</label>
          <input 
            required='required'
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
      </div>
      <div classname="col-sm">
        <div className="alert alert-primary">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary" onSubmit={onSubmit}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
