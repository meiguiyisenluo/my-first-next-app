"use client";
import { useRouter } from "next/navigation";
export default function BackBtn() {
  const router = useRouter();
  const onClickHandler = () => {
    router.back();
  };
  return <button onClick={onClickHandler}>back</button>;
}
