// Use State react.dev/reference/react/useState
import { useState } from "react";

export function UseStateCounter() {
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

  return (
    <>
      <button className="border rounded-lg py-2" type="button" disabled>
        count is {count}
      </button>
      <button
        className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
        type="button"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
        type="button"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
        type="button"
        onClick={reset}
      >
        Reset
      </button>
    </>
  );
}
