import { Toggle } from "@common/enums";

export const apiUrl = String(import.meta.env.VITE_API_URL);
export const currency = String(import.meta.env.VITE_CURRENCY);
export const locale = String(import.meta.env.VITE_LOCALE);
export const timezone = String(import.meta.env.VITE_TIMEZONE);
export const isAuthEnabled =
  parseInt(import.meta.env.VITE_ENABLE_AUTH, 2) === Toggle.Enabled;

export const expensesUrl = `${apiUrl}/expenses`;
export const authUrl = `${apiUrl}/auth`;
export const calendarUrl = `${apiUrl}/calendar`;
