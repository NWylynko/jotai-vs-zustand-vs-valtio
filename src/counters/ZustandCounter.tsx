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

export function ZustandCounter() {
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
