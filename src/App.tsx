import "./App.css";
import Child from "./components/Child";
// import Child from "./components/Child";
import useOmniHook from "./hooks/useOmniHook";
import { Entity } from "./types/base-interface-types/entityType";
import { EntityFnT } from "./types/function-types/entityFnType";

export type StateI = {
  number?: number;
  name?: string;
  data?: {
    [x: string]: number | null | string;
  };
};

interface FunctionsI {
  getName: () => string | undefined;
  showNumber: (num: number) => void;
  showAlert: () => void;
}

export type MyEntity = Entity<StateI, FunctionsI>;
export type MYEntityFn = EntityFnT<StateI, FunctionsI>;

function getName(this: MyEntity): string | undefined {
  console.log("getName", this.name);
  return this.name;
}

function showNumber(num: number): void {
  console.log("number", num);
}

function showAlert(): void {
  console.log("alert");
}

const register: FunctionsI = { getName, showNumber, showAlert };

function App() {
  const initState = {
    number: 1,
    name: "Mississippi",
    data: { a: 1, b: "spring", c: null },
  };

  const app = useOmniHook<StateI, FunctionsI>(initState, register);

  console.log("parent component");
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          const randomNum = Number(Math.random().toFixed(5));
          // Setter
          app.set({ number: randomNum, name: `Mississippi ${randomNum}` });
          // Default method
          app.toArray(0, { keyAsId: true, idName: "userId", fail: "object" });
          // Custom methods
          app.getName();
          app.showNumber(42);
          app.showAlert();
        }}
      >
        PARENT
      </button>
      <Child entity={app.entity} />
    </div>
  );
}

export default App;
