import { MouseEventHandler } from "react";
import StageSwitcher from "./StageSwitcher";

interface CalendarBarProps {
  onLeft?: MouseEventHandler<HTMLButtonElement>;
  onRight?: MouseEventHandler<HTMLButtonElement>;
  date: Date;
}

export default function CalendarBar({
  onLeft,
  onRight,
  date,
}: CalendarBarProps) {
  return (
    <header className="flex flex-row p-2 bg-slate-50 justify-between items-center">
      <div className="flex flex-row gap-6">
        <StageSwitcher onLeft={onLeft} onRight={onRight} />
        <h1 className=" font-extrabold text-5xl text-gray-600">
          {date.toLocaleString("default", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </h1>
      </div>
    </header>
  );
}
