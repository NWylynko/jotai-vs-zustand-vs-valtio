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
  const snap = useSnapshot(state);

  return (
    <>
      <button className="border rounded-lg py-2" type="button" disabled>
        count is {snap.count}
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
