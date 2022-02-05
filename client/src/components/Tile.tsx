import Button from "./Button";

interface TileProps {
  date: string;
}

export default function Tile({ date }: TileProps) {
  return (
    <Button>
      <h1 className="mb-16 m-1 font-semibold text-gray-500 text-lg">{date}</h1>
    </Button>
  );
}
