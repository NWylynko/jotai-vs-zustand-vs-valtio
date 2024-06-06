// Use Context with Use State react.dev/reference/react/useContext
import { useState, useContext, createContext } from "react";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = createContext<Store>({
  count: 0,
  increment: () => {
    throw new Error("Trying to call increment outside of provider");
  },
  decrement: () => {
    throw new Error("Trying to call decrement outside of provider");
  },
  reset: () => {
    throw new Error("Trying to call reset outside of provider");
  },
});

const useCounter = () => useContext(CounterContext);

export function UseContextCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const store = { count, increment, decrement, reset };

  return (
    <CounterContext.Provider value={store}>
      <Display />
      <Increment />
      <Decrement />
      <Reset />
    </CounterContext.Provider>
  );
}

function Display() {
  const { count } = useCounter();

  return (
    <button className="border rounded-lg py-2" type="button" disabled>
      count is {count}
    </button>
  );
}

function Increment() {
  const { increment } = useCounter();

  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={increment}
    >
      Increment
    </button>
  );
}

function Decrement() {
  const { decrement } = useCounter();

  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={decrement}
    >
      Decrement
    </button>
  );
}

function Reset() {
  const { reset } = useCounter();

  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={reset}
    >
      Reset
    </button>
  );
}
