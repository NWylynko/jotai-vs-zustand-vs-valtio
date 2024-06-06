export default function App() {
  return (
    <main className="flex flex-col md:flex-row gap-4 justify-center items-center h-svh w-svw">
      <div className="p-4 flex flex-col gap-4">
        <span>Jotai implementation</span>
        <JotaiCounter />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <span>Zustand implementation</span>
        <ZustandCounter />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <span>Valtio implementation</span>
        <ValtioCounter />
      </div>
    </main>
  );
}

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

function JotaiCounter() {
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

// Zustand npmjs.com/package/zustand
import { create } from "zustand";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

function ZustandCounter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore((state) => state.reset);

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

function ValtioCounter() {
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
