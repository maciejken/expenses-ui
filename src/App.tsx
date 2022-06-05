import "./App.css";
import { isAuthEnabled } from "@app/config";
import LoginForm from "@features/auth/LoginForm/LoginForm";
import { useAppSelector } from "@app/hooks";
import { selectAuthToken } from "@features/auth/authSlice";

function App() {
  const authToken = useAppSelector(selectAuthToken);
  if (isAuthEnabled && !authToken) {
    return <LoginForm />;
  }
  return null;
}

export default App;
