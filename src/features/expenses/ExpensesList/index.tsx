import { useAppDispatch } from "@app/hooks";
import { FC } from "react";
import { removeExpense, updateExpense } from "../expensesThunks";
import { ExpenseData, ExpenseUpdate } from "../expensesTypes";
import ExpensesList from "./ExpensesList";

interface Props {
  expenses: ExpenseData[] | null;
}

const ExpensesListWrapper: FC<Props> = ({ expenses }) => {
  const dispatch = useAppDispatch();

  const handleExpenseUpdate = (data: ExpenseUpdate) => {
    dispatch(updateExpense(data));
  };
  const handleExpenseDelete = (data: ExpenseData) => {
    dispatch(removeExpense(data));
  };
  return (
    <ExpensesList
      expenses={expenses}
      onExpenseUpdated={handleExpenseUpdate}
      onExpenseDeleted={handleExpenseDelete}
    />
  );
};

export default ExpensesListWrapper;
