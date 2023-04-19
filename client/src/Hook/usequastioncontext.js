import { QuastionsContext } from "../context/Quastionscontext";
import { useContext } from "react";

export const useQuastionContext = () => {
  const context = useContext(QuastionsContext);
  if (!context) {
    // if we use the cntext out of the tree
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};
