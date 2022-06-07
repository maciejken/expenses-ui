import { Status } from "@common/enums";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { SET_EXPENSES_MODE, SET_EXPENSES_STATUS } from "./expensesActions";
import {
  addExpenseAsync,
  fetchExpensesAsync,
  removeExpenseAsync,
  updateExpenseAsync,
} from "./expensesThunks";
import { ExpenseData, ExpensesMode, ExpensesState } from "./expensesTypes";

export const initialState: ExpensesState = {
  expenses: null,
  status: Status.Loading,
  mode: ExpensesMode.Default,
};

const expensesReducer = createReducer(initialState, {
  [SET_EXPENSES_STATUS]: (
    state: ExpensesState,
    action: PayloadAction<Status>
  ) => {
    state.status = action.payload;
  },
  [SET_EXPENSES_MODE]: (
    state: ExpensesState,
    action: PayloadAction<ExpensesMode>
  ) => {
    state.mode = action.payload;
  },
  [fetchExpensesAsync.fulfilled.type]: (
    state: ExpensesState,
    action: PayloadAction<ExpenseData[]>
  ) => {
    state.status = Status.Idle;
    state.expenses = action.payload;
  },
  [fetchExpensesAsync.rejected.type]: (state: ExpensesState) => {
    state.status = Status.Failed;
  },
  [addExpenseAsync.pending.type]: (state: ExpensesState) => {
    state.status = Status.Loading;
  },
  [addExpenseAsync.fulfilled.type]: (state: ExpensesState) => {
    state.status = Status.ShouldUpdate;
  },
  [addExpenseAsync.rejected.type]: (state: ExpensesState) => {
    state.status = Status.Failed;
  },
  [updateExpenseAsync.pending.type]: (state: ExpensesState) => {
    state.status = Status.Loading;
  },
  [updateExpenseAsync.fulfilled.type]: (state: ExpensesState) => {
    state.status = Status.ShouldUpdate;
  },
  [updateExpenseAsync.rejected.type]: (state: ExpensesState) => {
    state.status = Status.Failed;
  },
  [removeExpenseAsync.pending.type]: (state: ExpensesState) => {
    state.status = Status.Loading;
  },
  [removeExpenseAsync.fulfilled.type]: (state: ExpensesState) => {
    state.status = Status.ShouldUpdate;
  },
  [removeExpenseAsync.rejected.type]: (state: ExpensesState) => {
    state.status = Status.Failed;
  },
});

export default expensesReducer;
