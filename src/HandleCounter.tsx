import { useCounter } from "./hooks/useCounter";

const HandleCounter = () => {
  const { counter, setCounter } = useCounter();

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase counter</button>
    </div>
  );
};

export { HandleCounter };
