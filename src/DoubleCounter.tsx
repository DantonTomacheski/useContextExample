import { useEffect, useState } from "react";
import { useCounter } from "./hooks/useCounter";

function DoubleCounter() {
  const { counter } = useCounter();

  const [doubleCounter, setDoubleCounter] = useState(0);

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter]);

  return (
    <div>
      <h2>Double Counter: {doubleCounter}</h2>
    </div>
  );
}

export default DoubleCounter;
