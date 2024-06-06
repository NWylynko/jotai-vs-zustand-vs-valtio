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
      <Display count={count} />
      <Increment onIncrement={increment} />
      <Decrement onDecrement={decrement} />
      <Reset onReset={reset} />
    </>
  );
}

function Display(props: { count: number }) {
  return (
    <span className="border rounded-lg py-2 text-center">
      count is {props.count}
    </span>
  );
}

function Increment(props: { onIncrement: () => void }) {
  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={props.onIncrement}
    >
      Increment
    </button>
  );
}

function Decrement(props: { onDecrement: () => void }) {
  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={props.onDecrement}
    >
      Decrement
    </button>
  );
}

function Reset(props: { onReset: () => void }) {
  return (
    <button
      className="border rounded-lg py-2 hover:scale-105 active:scale-95 transition-transform"
      type="button"
      onClick={props.onReset}
    >
      Reset
    </button>
  );
}
