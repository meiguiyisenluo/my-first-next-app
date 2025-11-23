import { useState } from "react";
import { createContext } from "use-context-selector";

type StateType = {
  count1: number;
  count2: number;
};

type ContextType = {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
};

const initialState: StateType = { count1: 0, count2: 0 };

const Context = createContext<ContextType>({
  state: initialState,
  setState: () => {},
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState);
  const value = { state, setState };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Context;
