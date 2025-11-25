"use client";
import React, { useState, useRef } from "react";

import Child, { Handler as ChildHandler } from "./_component/child";
const MemoChild = React.memo(Child, (nextProps, prevProps) => {
  return nextProps.count === prevProps.count;
});
import Child2 from "./_component/child2";
const MemoChild2 = React.memo(Child2, () => true);

export default function Parent() {
  console.log("Parent", "render");
  const [count, setCount] = useState(() => 0);
  const plus = () => setCount((n) => n + 1);
  const ChildRef = useRef<null | ChildHandler>(null);
  const focus = () => {
    ChildRef.current?.focus();
  };
  return (
    <div>
      <h1>Parent</h1>
      <div>
        {count}
        <br />
        <button onClick={plus}>plus</button>
        <br />
        <button onClick={focus}>focus</button>
      </div>

      <hr />
      <MemoChild ref={ChildRef} count={count} />

      <hr />
      <MemoChild2 />
    </div>
  );
}
