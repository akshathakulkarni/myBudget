import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import useVisualMode from "../hooks/useVisualMode";
import "./Expense.css";

const SHOW = "SHOW";
const EDIT = "EDIT";
let isButtonTriggered = false;

const Budget = () => {
  
  const { budget } = useContext(AppContext);

  const { mode, transition } = useVisualMode(isButtonTriggered ? EDIT : SHOW);

  const { dispatch } = useContext(AppContext);

  const [newBudget, setNewBudget] = useState(budget);

  const onSubmit = (event) => {
  
    event.preventDefault();

    const updatedBudget = {
      budget: newBudget,
    };
    //pass dispatch actions(to update) down instead of callbacks
    dispatch({
      type: "Update Budget",
      payload: updatedBudget,
    });
    transition(SHOW);
  };

  const updateBudget = () => {
    isButtonTriggered = true;
    transition(EDIT);
  };

  return (
    <>
      {mode === SHOW && (
        <div className="alert alert-secondary" id="budget">
          <span>Budget: ${newBudget}</span>
          <button
            className="btn btn-sm btn-info"
            id="update-button"
            onClick={updateBudget}
          >
            Update
          </button>
        </div>
      )}
      {mode === EDIT && (
        <div className="alert alert-secondary" id="budget">
          <span>Budget: $<input 
            required="required"
            type="number"
            id="value"
            value={newBudget}
            onChange={(event) => setNewBudget(event.target.value)}

          /></span>
          <button
            type='submit'
            className="btn btn-sm btn-info"
            id="update-button"
            onClick={onSubmit}
          >
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default Budget;
