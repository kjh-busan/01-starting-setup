import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const ChangeCancelHandler = (_cancelState) => {
    props.onCancelButton(_cancelState);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onChangeCancel={ChangeCancelHandler}
        onSaveExpenseData={SaveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
