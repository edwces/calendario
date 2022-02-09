import Button, { ButtonProps } from "./Button";
import TileEvent from "./TileEvent";

type TileProps = ButtonProps & {
  date: number;
  events?: { title: string }[];
};

export default function Tile({ date, className, events, ...props }: TileProps) {
  return (
    <Button className={`flex flex-col grow ${className}`} {...props}>
      <h1 className="mb-1 text-center font-semibold text-gray-500 text-lg">
        {date}
      </h1>
      <div className="flex flex-col gap-1">
        {events &&
          events.map((item, index) => (
            <TileEvent key={index} title={item.title}></TileEvent>
          ))}
      </div>
    </Button>
  );
}
