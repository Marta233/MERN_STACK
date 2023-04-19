import { createContext, useReducer, useEffect } from "react";
import { json } from "react-router-dom";

export const UserContext = createContext();
export const userreducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userreducer, {
    user: null,
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  console.log("usercontext state:", state);
  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
