// Jotai npmjs.com/package/jotai
import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const countWithIncrementAtom = atom(null, (get, set) =>
  set(countAtom, get(countAtom) + 1),
);
const countWithDecrementAtom = atom(null, (get, set) =>
  set(countAtom, get(countAtom) - 1),
);
const countWithResetAtom = atom(null, (_get, set) => set(countAtom, 0));

export function JotaiCounter() {
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
  const [count] = useAtom(countAtom);
  return (
    <span className="border rounded-lg py-2 text-center">count is {count}</span>
  );
}

function Increment() {
  const [, increment] = useAtom(countWithIncrementAtom);
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
  const [, decrement] = useAtom(countWithDecrementAtom);
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
  const [, reset] = useAtom(countWithResetAtom);
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
