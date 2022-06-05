import { Status } from "@common/enums";

export interface NewExpenseData {
  title: string;
  amount: string;
  category?: string;
  date: string;
}

export interface ExpenseData extends NewExpenseData {
  id: string;
}

export type ExpenseUpdate = Partial<NewExpenseData>;

export enum ExpensesMode {
  Default = "default",
  Create = "create",
  Update = "update",
  Delete = "delete",
}

export interface ExpensesState {
  expenses: ExpenseData[];
  status: Status;
  mode: ExpensesMode;
}

interface Authorized {
  token: string;
}

export interface FetchExpensesPayload extends Authorized {
  from?: string;
  to?: string;
}

export interface AddExpensePayload extends Authorized {
  data: NewExpenseData;
}

export interface UpdateExpensePayload extends Authorized {
  id: string;
  data: ExpenseUpdate;
}

export interface DeleteExpensePayload extends Authorized {
  id: string;
}

export type Tokenless<T> = Omit<T, "token">;
