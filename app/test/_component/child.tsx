import { useRef, forwardRef, useImperativeHandle } from "react";
import { useContextSelector } from "use-context-selector";

import counterContext from "../_lib/counterContext";

export type Handler = {
  focus: () => void;
};

export default forwardRef(function Child(
  { count = 0 }: { count?: number },
  ref
) {
  console.log("Child", "render");
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleObj: Handler = {
    focus: () => {
      inputRef.current?.focus();
    },
  };
  useImperativeHandle(ref, () => handleObj);

  const context_modifyContext = useContextSelector(
    counterContext,
    (state) => state?.setState
  );
  const modifyContext = () => {
    context_modifyContext?.((s) => ({ ...s, count2: s.count2 + 1 }));
  };

  return (
    <div>
      <h2>Child</h2>
      <div>from parent: {count}</div>
      <input ref={inputRef} type="text" />
      <button onClick={modifyContext}>modifyContext</button>
    </div>
  );
});
