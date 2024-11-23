import { MYEntityFn, MyEntity } from "../App";

const Child = ({ entity }: { entity: MYEntityFn }) => {
  const app: MyEntity = entity();
  console.log("child component");
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          console.log("child", app.name, app.number);
        }}
      >
        CHILD
      </button>
    </div>
  );
};

export default Child;
