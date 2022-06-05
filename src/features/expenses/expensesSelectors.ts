import { RootState } from "@app/store";

export const selectExpenses = (state: RootState) => state.expenses.expenses;

export const selectExpensesStatus = (state: RootState) => state.expenses.status;

export const selectExpensesMode = (state: RootState) => state.expenses.mode;
