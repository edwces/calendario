interface TileProps {
  date: string;
}

export default function Tile({ date }: TileProps) {
  return (
    <button className=" w-28 h-28 bg-slate-50 rounded-md">
      <h1 className=" -mt-12 ml-12 font-semibold text-gray-500 text-lg">
        {date}
      </h1>
    </button>
  );
}
