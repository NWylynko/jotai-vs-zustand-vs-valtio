import { JotaiCounter } from "./counters/JotaiCounter";
import { UseStateCounter } from "./counters/UseStateCounter";
import { ValtioCounter } from "./counters/ValtioCounter";
import { ZustandCounter } from "./counters/ZustandCounter";

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
      <div className="p-4 flex flex-col gap-4">
        <span>UseState implementation</span>
        <UseStateCounter />
      </div>
    </main>
  );
}
