import React from "react";
import Card from "../UI/Card";
import "./NewExpense.css";

const AddNewExpense = () => {
  const addNewExpenseHandler = () => {
    console.log("addNewExpense");
  };

  return (
    <Card>
      <div className="new-expense__actions">
        <button type="button" value={true} onClick={addNewExpenseHandler}>
          Add New Expense
        </button>
      </div>
    </Card>
  );
};

export default AddNewExpense;
