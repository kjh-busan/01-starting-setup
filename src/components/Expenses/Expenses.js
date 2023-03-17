import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const expenses = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  const selectFilterHandler = (expenseFilter) => {
    console.log("expenseFilter = " + expenseFilter);
  };

  return (
    <>
      <ExpensesFilter onselectExpenseFilter={selectFilterHandler} />
      <Card className="expenses">{expenses}</Card>
    </>
  );
};

export default Expenses;
