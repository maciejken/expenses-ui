import { useAppDispatch, useAppSelector } from "@app/hooks";
import { BasicAuth } from "../authAPI";
import { fetchAuthToken, selectAuthStatus } from "../authSlice";
import SignIn from "./SignIn";

const LoginFormWrapper = () => {
  const dispatch = useAppDispatch();
  const signInStatus = useAppSelector(selectAuthStatus);
  const handleSignIn = (auth: BasicAuth) => {
    dispatch(fetchAuthToken(auth));
  };

  return <SignIn onSignIn={handleSignIn} status={signInStatus} />;
};

export default LoginFormWrapper;
