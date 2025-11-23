import { useRef, forwardRef, useImperativeHandle } from "react";

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

  return (
    <div>
      <h2>Child</h2>
      <div>from parent: {count}</div>
      <input ref={inputRef} type="text" />
    </div>
  );
});
