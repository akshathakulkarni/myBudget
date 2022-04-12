import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import './Expense.css'

const Budget = () => {



  const { budget } = useContext(AppContext);

  const { dispatch } = useContext(AppContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newBudget = {
      budget: budget,
    };
    console.log('1111 = ', newBudget)
    //pass dispatch actions(to update) down instead of callbacks
    dispatch({
      type: "Update Budget",
      payload: newBudget,
    });
  };

  // const updateBudget = () => {
  //   const [newBudget, setNewBudget] = useState(budget);
  //   return (
  //     <div className="alert alert-secondary" id='budget'>
  //     <span>
  //       <input 
        
  //       required="required"
  //       type="number"
  //       className="form-control"
  //       id="budget"
  //       value={newBudget}
  //       onChange={(event) => setNewBudget(event.target.value)}
  //     /></span>
  //     <button className="btn btn-sm btn-info" id='update-button' onSubmit={onSubmit}>Save</button>
  //   </div>
  //   )
  // }
  return (
    <div className="alert alert-secondary" id='budget'>
      <span>Budget: ${budget}</span>
      <button className="btn btn-sm btn-info" id='update-button'>Update</button>
    </div>
  );
};

export default Budget;
