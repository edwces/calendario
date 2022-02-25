import Checkbox from "../../components/Checkbox";

export default function Sidebar() {
  return (
    <aside className=" bg-slate-50 w-72 p-2 pl-5">
      <h1 className="font-extrabold text-4xl underline  decoration-pink-500 text-slate-700 font-mono">
        CALENDARIO
      </h1>
      <h1 className="font-extrabold text-3xl text-gray-600 mt-10">Calendars</h1>
      <div
        className="ml-5
      mt-2 flex flex-col gap-1"
      >
        <Checkbox>Main</Checkbox>
        <Checkbox>Second</Checkbox>
        <Checkbox>Third</Checkbox>
      </div>
    </aside>
  );
}
