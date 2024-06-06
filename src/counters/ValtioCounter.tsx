// Valtio npmjs.com/package/valtio
import { proxy, useSnapshot } from "valtio";

const state = proxy({ count: 0 });
const increment = () => {
  state.count++;
};
const decrement = () => {
  state.count--;
};
const reset = () => {
  state.count = 0;
};

export function ValtioCounter() {
  return (
    <>
      <Display />
      <Increment />
      <Decrement />
      <Reset />
    </>
  );
}

function Display() {
  const snap = useSnapshot(state);

  return (
    <span className="border rounded-lg py-2 text-center">
      count is {snap.count}
    </span>
  );
}

function Increment() {
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
