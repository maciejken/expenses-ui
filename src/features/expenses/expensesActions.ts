import { createAction } from "@reduxjs/toolkit";
import { Status } from "@common/enums";
import { ExpensesMode } from "./expensesTypes";

export const FETCH_EXPENSES = "expenses/fetchExpenses";
export const CREATE_EXPENSE = "expenses/createExpense";
export const UPDATE_EXPENSE = "expenses/updateExpense";
export const REMOVE_EXPENSE = "expenses/removeExpense";

export const SET_EXPENSES_STATUS = "expenses/setStatus";
export const SET_EXPENSES_MODE = "expenses/setMode";

export const setExpensesStatus = createAction<Status>(SET_EXPENSES_STATUS);
export const setExpensesMode = createAction<ExpensesMode>(SET_EXPENSES_MODE);
