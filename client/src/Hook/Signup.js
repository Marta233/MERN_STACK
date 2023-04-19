import { useState } from "react";
import { useUserContext } from "./useUserContext";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useUserContext();

  const signup = async (email, password, FirstName, LastName, UserName) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, FirstName, LastName, UserName }),
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
  return { signup, isLoading, error };
};
