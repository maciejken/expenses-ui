import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { FC } from "react";
import { ExpenseData, ExpenseUpdate } from "../expensesTypes";

interface ExpenseItemProps extends ExpenseData {
  onDelete: (data: ExpenseData) => void;
  onUpdate: (data: ExpenseUpdate) => void;
}

const ExpenseItem: FC<ExpenseItemProps> = ({
  id,
  amount,
  category,
  date,
  title,
  onUpdate,
  onDelete,
}) => {
  const [expenseDate] = date.split("T");
  return (
    <ListItem divider>
      <ListItemAvatar>
        <Avatar src={`/assets/images/categories/${category}.png`} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={expenseDate} />
    </ListItem>
  );
};

export default ExpenseItem;
