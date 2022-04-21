import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function useCounter() {
  return useContext(CounterContext)
}

export { useCounter }