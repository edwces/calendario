import { Event } from "../generated/graphql";
import Button, { ButtonProps } from "./Button";
import TileEvent from "./TileEvent";

type TileProps = ButtonProps & {
  date: number;
  events?: Partial<Event>[];
};

export default function Tile({ date, className, events, ...props }: TileProps) {
  return (
    <Button className={`flex flex-col basis-full ${className}`} {...props}>
      <h1 className="mb-1 text-center font-semibold text-gray-500 text-lg">
        {date}
      </h1>
      <div className="flex flex-col gap-1 h-full">
        {events &&
          events.map((item, index) => (
            <TileEvent key={index} title={item.title!}></TileEvent>
          ))}
      </div>
    </Button>
  );
}
