"use client";

import { useCallback, useMemo, useState } from "react";

interface WelcomeProp {
  onClick: () => void;
  count: number;
}

const Welcome = ({ onClick, count }: WelcomeProp) => {
  console.log("welcome is rendering...");

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="rounded bg-purple-700 py-2 px-4 font-bold text-white hover:bg-purple-600 dark:text-gray-300"
        onClick={onClick}>
        Increment
      </button>
      <div>Count: {count}</div>
    </div>
  );
};

const Hello = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const onClickCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const countMemo = useMemo(() => {
    return count;
  }, [count]);

  console.log("hello is rendering...");

  return (
    <div className="flex min-h-[15rem] flex-col items-center justify-end gap-4">
      <p>{text}</p>
      <Welcome onClick={onClickCallback} count={countMemo} />
      <input
        id="helloInput"
        placeholder="Type in hello"
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="focus:shadow-outline mb-3 w-60 appearance-none rounded border border-purple-700 py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none dark:bg-slate-600 dark:text-gray-300"
      />
    </div>
  );
};

export default Hello;
