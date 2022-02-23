import { MouseEventHandler, useContext } from "react";
import userStateContext from "../../../stores/userState/userStateContext";
import LogoutButton from "../../auth/LogoutButton";
import Avatar from "../../sidebar/Avatar";
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
  const { user } = useContext(userStateContext);

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
      <div className="flex flex-row, gap-3">
        <LogoutButton />
        <Avatar src={user ? user.avatar! : ""} className="mr-2" />
      </div>
    </header>
  );
}
