// Zustand with React Context tkdodo.eu/blog/zustand-and-react-context
import { createStore, useStore, type StoreApi } from "zustand";
import { useState, useContext, createContext } from "react";

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const createCounterStore = (initialState: Pick<Store, "count">) =>
  createStore<Store>()((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
  }));

const StoreContext = createContext<StoreApi<Store> | null>(null);

const useCounterStore = <Selector extends (state: Store) => unknown>(
  selector: Selector,
) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Missing StoreContext.Provider");
  }
  return useStore(store, selector) as ReturnType<Selector>;
};

export function ZustandWContextCounter() {
  const [store] = useState(() => createCounterStore({ count: 0 }));

  return (
    <StoreContext.Provider value={store}>
      <Display />
      <Increment />
      <Decrement />
      <Reset />
    </StoreContext.Provider>
  );
}

function Display() {
  const count = useCounterStore((state) => state.count);

  return (
    <span className="border rounded-lg py-2 text-center">count is {count}</span>
  );
}

function Increment() {
  const increment = useCounterStore((state) => state.increment);

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
  const decrement = useCounterStore((state) => state.decrement);

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
  const reset = useCounterStore((state) => state.reset);

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
