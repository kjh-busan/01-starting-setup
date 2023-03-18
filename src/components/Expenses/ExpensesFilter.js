import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const ChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const optionValuesArray = [
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
  ];
  const optionValues = optionValuesArray.map((year) => {
    return (
      <option key={year} value={year}>
        {year}
      </option>
    );
  });

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={ChangeHandler}>
          {optionValues}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
