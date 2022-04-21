import { createContext, ReactNode, useState } from "react";

type ICounterContextProvider = {
  children: ReactNode;
};

type ICounterState = number;

type IcreateContext = {
  counter: ICounterState;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

export const CounterContext = createContext({} as IcreateContext);

function CounterContextProvider({ children }: ICounterContextProvider) {
  const [counter, setCounter] = useState<ICounterState>(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export { CounterContextProvider };
