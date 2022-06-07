import { Container, List } from "@mui/material";
import { FC } from "react";
import { ExpenseData, ExpenseUpdate } from "../expensesTypes";
import ExpenseItem from "./ExpenseItem";

interface ExpensesListProps {
  expenses: ExpenseData[] | null;
  onExpenseUpdated: (data: ExpenseUpdate) => void;
  onExpenseDeleted: (data: ExpenseData) => void;
}

const ExpensesList: FC<ExpensesListProps> = ({
  expenses,
  onExpenseUpdated,
  onExpenseDeleted,
}) => {
  if (!expenses) {
    return null;
  }

  return (
    <Container component="main" maxWidth="xs">
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {expenses.map(({ id, amount, title, date, category }) => (
          <ExpenseItem
            id={id}
            title={title}
            date={date}
            amount={amount}
            category={category}
            onUpdate={onExpenseUpdated}
            onDelete={onExpenseDeleted}
          />
        ))}
      </List>
    </Container>
  );
};

export default ExpensesList;
