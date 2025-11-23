import { useContextSelector } from "use-context-selector";
import counterContext from "../_lib/counterContext";
export default function Child2() {
  console.log("Child2", "render");
  const count1 = useContextSelector(
    counterContext,
    (state) => state?.state.count1
  );
  return (
    <div>
      <h3>Child2</h3>
      <div>{count1}</div>
    </div>
  );
}
