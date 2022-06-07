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

export interface ExpenseUpdate extends Partial<NewExpenseData> {
  id: string;
}

export enum ExpensesMode {
  Default = "default",
  Create = "create",
  Update = "update",
  Delete = "delete",
}

export interface ExpensesState {
  expenses: ExpenseData[] | null;
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
  data: Partial<NewExpenseData>;
}

export interface DeleteExpensePayload extends Authorized {
  id: string;
}

export type Tokenless<T> = Omit<T, "token">;
