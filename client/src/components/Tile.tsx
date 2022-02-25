import React, { HTMLAttributes, MouseEventHandler } from "react";
import { Event } from "../generated/graphql";
import Button, { ButtonProps } from "./Button";
import TileEvent from "./TileEvent";

const styleTypes = {
  primary: "bg-white",
  disabled: "bg-slate-100",
};

type TileProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  date: number;
  events?: Partial<Event>[];
  variant?: keyof typeof styleTypes;
  onEventClick?: (e: React.MouseEvent<HTMLButtonElement>, id?: number) => void;
};

export default function Tile({
  date,
  className,
  events,
  onEventClick,
  variant = "primary",
  ...props
}: TileProps) {
  return (
    <div
      className={`flex flex-col basis-full ${styleTypes[variant]} ${className}`}
      {...props}
    >
      <h1 className="mb-1 text-center font-semibold text-gray-500 text-lg">
        {date}
      </h1>
      <div className="flex flex-col gap-1 h-full">
        {events &&
          events.map((item, index) => (
            <TileEvent
              key={index}
              title={item.title!}
              onClick={(e) => onEventClick!(e, item.id)}
            ></TileEvent>
          ))}
      </div>
    </div>
  );
}
