export default function Changebar() {
  return (
    <header className="p-2 bg-slate-300">
      <div className="ml-3 p-1 inline-flex flex-row bg-slate-400 gap-2 rounded-md">
        <button className="bg-slate-300 rounded-md p-1">Daily</button>
        <button className="bg-slate-300 rounded-md p-1">Weekly</button>
        <button className="bg-slate-300 rounded-md p-1">Monthly</button>
      </div>
    </header>
  );
}
