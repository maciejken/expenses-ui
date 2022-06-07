import "./App.css";
import { isAuthEnabled } from "@app/config";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { selectAuthToken } from "@features/auth/authSlice";
import SignIn from "@features/auth/SignIn";
import ExpensesList from "@features/expenses/ExpensesList";
import { useEffect } from "react";
import { selectExpenses } from "@features/expenses/expensesSelectors";
import { fetchExpenses } from "@features/expenses/expensesThunks";

function App() {
  const authToken = useAppSelector(selectAuthToken);
  const expenses = useAppSelector(selectExpenses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!expenses && authToken) {
      dispatch(fetchExpenses());
    }
  }, [authToken]);

  if (isAuthEnabled && !authToken) {
    return <SignIn />;
  }
  return <ExpensesList expenses={expenses} />;
}

export default App;
