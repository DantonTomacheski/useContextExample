import { CounterContextProvider } from "./contexts/CounterContext";
import DoubleCounter from "./DoubleCounter";
import { HandleCounter } from "./HandleCounter";

function App() {
  return (
    <CounterContextProvider>
      <HandleCounter />
      <DoubleCounter />
    </CounterContextProvider>
  );
}

export default App;
