import { useMemo, useState } from "react";

export default function Changebar() {
  const [current, changeCurrent] = useState(-1);

  return (
    <header className="p-2 bg-slate-300">
      <div className="ml-3 p-1 inline-flex flex-row bg-slate-400 gap-2 rounded-md">
        <button
          className={
            current === 0
              ? "bg-red-600 rounded-md p-1"
              : "bg-slate-300 rounded-md p-1"
          }
          onClick={() => changeCurrent(0)}
        >
          Daily
        </button>
        <button
          className={
            current === 1
              ? "bg-red-600 rounded-md p-1"
              : "bg-slate-300 rounded-md p-1"
          }
          onClick={() => changeCurrent(1)}
        >
          Weekly
        </button>
        <button
          className={
            current === 2
              ? "bg-red-600 rounded-md p-1"
              : "bg-slate-300 rounded-md p-1"
          }
          onClick={() => changeCurrent(2)}
        >
          Monthly
        </button>
      </div>
    </header>
  );
}
