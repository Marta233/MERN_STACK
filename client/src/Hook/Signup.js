import { useState } from "react";
import { useUserContext } from "./useUserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useUserContext();
  const navigate = useNavigate();

  const signup = async (email, password, FirstName, LastName, UserName) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch("http://localhost:4000/api/user/Signup", {
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
      setIsLoading(false);
      navigate("/ListQuastion");
    }
  };
  return { signup, isLoading, error };
};
