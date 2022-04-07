import React from "react";

const AddExpenseForm = () => {
  return (
    <form >
      <div className="col-sm">
        <div className="alert alert-success">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          />
        </div>
      </div>
      <div classname="col-sm">
        <div className="alert alert-primary">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
