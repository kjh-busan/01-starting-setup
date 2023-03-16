import "./ExpenseItem.css";

const ExpenseItem = ({ expense }) => {
  // const expenseDate = new Date(2023, 2, 16);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">${expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
