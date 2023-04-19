import { createContext, useReducer } from "react";
// creat context and store in the variable
// export and we use in another file
export const QuastionsContext = createContext();

// initial state
// current action
export const quastionReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_ANSWER":
      return {
        quastions: action.payload,
      };
    case "CREATE_ANSWER":
      return {
        state,
        quastions: [...state.quastions, action.payload],
      };
    default:
      return state;
  }
};

// provide the context in our app tree
// we use this in diffrent file
export const QuastionsContextProvider = ({ children }) => {
  // similar to usestate usereducer but usereducer
  // dispach used to update the state by calling dispach({type: 'CREAT_QUASTION', payload: [](represent any data to make change)
  //]})
  // usereducer contain two argument
  // 1. name of reducer
  // 2. initial value of state
  const [state, dispatch] = useReducer(quastionReducer, {
    quastions: null,
  });

  return (
    // the all component tree can access the context
    <QuastionsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuastionsContext.Provider>
  );
};
