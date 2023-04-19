import { useState } from "react";
import { useUserContext } from "./useUserContext";
export const useLogin = () => {
  const [errorlogin, setError] = useState(null);
  const [isLoadinglogin, setIsLoading] = useState(null);
  const { dispatch } = useUserContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // update the usercontext
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(true);
    }
  };
  return { login, isLoadinglogin, errorlogin };
};
