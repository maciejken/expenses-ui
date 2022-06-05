import { Status } from "@common/enums";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { SET_EXPENSES_MODE, SET_EXPENSES_STATUS } from "./expensesActions";
import { ExpensesMode, ExpensesState } from "./expensesTypes";

export const initialState: ExpensesState = {
  expenses: [],
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
});

export default expensesReducer;
