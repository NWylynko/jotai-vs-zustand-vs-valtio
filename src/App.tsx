import { JotaiCounter } from "./counters/JotaiCounter";
import { UseContextCounter } from "./counters/UseContextCounter";
import { UseStateCounter } from "./counters/UseStateCounter";
import { ValtioCounter } from "./counters/ValtioCounter";
import { ZustandCounter } from "./counters/ZustandCounter";
import { ZustandWContextCounter } from "./counters/ZustandWContextCounter";

export default function App() {
  return (
    <div className="flex flex-col gap-8 w-full min-h-svh justify-center items-center">
      <main className="flex flex-col md:flex-row gap-4 items-center justify-center w-full">
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://npmjs.com/package/jotai"
          >
            Jotai
          </a>
          <JotaiCounter />
        </div>
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://npmjs.com/package/zustand"
          >
            Zustand
          </a>
          <ZustandCounter />
        </div>
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://npmjs.com/package/valtio"
          >
            Valtio
          </a>
          <ValtioCounter />
        </div>
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://react.dev/reference/react/useState"
          >
            Use State
          </a>
          <UseStateCounter />
        </div>
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://react.dev/reference/react/useContext"
          >
            Use Context
          </a>
          <UseContextCounter />
        </div>
        <div className="p-4 flex flex-col gap-4 min-w-48">
          <a
            className="text-center text-blue-300 hover:underline"
            href="https://tkdodo.eu/blog/zustand-and-react-context"
          >
            Zustand With Context
          </a>
          <ZustandWContextCounter />
        </div>
      </main>
      <footer className="flex flex-col items-center justify-center w-full">
        <a
          className="text-center text-blue-300 hover:underline"
          href="https://github.com/NWylynko/jotai-vs-zustand-vs-valtio"
        >
          Repo here
        </a>
        <span className="max-w-[60ch]">
          I recommend using the{" "}
          <a
            href="https://react.dev/learn/react-developer-tools"
            className="text-center text-blue-300 hover:underline"
          >
            react dev tools
          </a>{" "}
          and enabling "Highlight updates when components render." to see which
          implementations re-render what on state change.
        </span>
      </footer>
    </div>
  );
}
