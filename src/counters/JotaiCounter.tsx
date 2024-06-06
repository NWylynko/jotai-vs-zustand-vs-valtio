// Jotai npmjs.com/package/jotai
import { atom, useAtom } from "jotai";

const countAtom = atom(0);
const countWithIncrementAtom = atom(
  (get) => get(countAtom),
  (get, set) => set(countAtom, get(countAtom) + 1),
);
const countWithDecrementAtom = atom(
  (get) => get(countAtom),
  (get, set) => set(countAtom, get(countAtom) - 1),
);
const countWithResetAtom = atom(
  (get) => get(countAtom),
  (_get, set) => set(countAtom, 0),
);

export function JotaiCounter() {
  const [count] = useAtom(countAtom);
  const [, increment] = useAtom(countWithIncrementAtom);
  const [, decrement] = useAtom(countWithDecrementAtom);
  const [, reset] = useAtom(countWithResetAtom);

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
