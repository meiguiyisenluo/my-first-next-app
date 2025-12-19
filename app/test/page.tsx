"use client";

import { useState } from "react";

const ButtonList = ({
  data,
  onCLickHandler,
}: {
  data: Array<number>;
  onCLickHandler: (_: number) => void;
}) => {
  return (
    <>
      {data.map((_) => (
        <IncreaseButton
          key={_}
          onClick={() => onCLickHandler(_)}
        ></IncreaseButton>
      ))}
    </>
  );
};

const IncreaseButton = ({ onClick }: { onClick: () => void }) => {
  return <div onClick={onClick}>plus</div>;
};

export default function Test() {
  const [counter, setCounter] = useState(0);
  const doubleCounter = counter * 2;

  const data = [1, 2, 3];
  const onCLickHandler = (_: number) => {
    setCounter(_);
  };

  return (
    <div>
      <div>{counter}</div>
      <div>{doubleCounter}</div>

      <ButtonList data={data} onCLickHandler={onCLickHandler} />
    </div>
  );
}
