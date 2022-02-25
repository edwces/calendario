import Checkbox from "../../components/Checkbox";

export default function Sidebar() {
  return (
    <aside className=" bg-slate-100 w-64">
      <h1>My Calendars:</h1>
      <Checkbox>Main</Checkbox>
      <Checkbox>Second</Checkbox>
      <Checkbox>Third</Checkbox>
    </aside>
  );
}
