import StageSwitcher from "./StageSwitcher";
import ViewSwitcher from "./ViewSwitcher";

export default function CalendarBar() {
  return (
    <header className="flex flex-row p-2 bg-slate-50 justify-between items-center">
      <div className="flex flex-row gap-6">
        <StageSwitcher />
        <h1 className=" font-extrabold text-5xl text-gray-600">
          February 2022
        </h1>
      </div>
      <ViewSwitcher />
    </header>
  );
}
