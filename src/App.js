import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddNewExpense from "./components/NewExpense/AddNewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [cancelState, setCancelState] = useState(false);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const cancelButtonHandler = (_cancelState) => {
    setCancelState(_cancelState);
    console.log("App.js cancelState = ", _cancelState);
  };
  let newExpense = <AddNewExpense />;
  if (cancelState) {
    newExpense = (
      <NewExpense
        onCancelButton={cancelButtonHandler}
        onAddExpense={addExpenseHandler}
      />
    );
  }

  return (
    <div>
      {newExpense}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
