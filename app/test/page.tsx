"use client";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";

const ButtonList = ({
  setCounter,
}: {
  setCounter: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div>
      {[1, 2, 3].map((_) => (
        <IncreaseButton key={_} onClick={() => setCounter(_)}></IncreaseButton>
      ))}
    </div>
  );
};

const IncreaseButton = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick}>plus</div>;
};

export default function Test() {
  const [counter, setCounter] = useState(0);
  const doubleCounter = counter * 2;
  return (
    <div>
      <div>{counter}</div>
      <div>{doubleCounter}</div>
      <ButtonList setCounter={setCounter}></ButtonList>
    </div>
  );
}
