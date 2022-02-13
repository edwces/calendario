import { MouseEventHandler, useState } from "react";
import Button from "./Button";

const styleColor = {
  red: "bg-red",
  purple: "bg-purple-700",
  blue: "bg-blue-600",
  orange: "bg-orange-600",
};

interface TileEventProps {
  title: string;
  color?: keyof typeof styleColor;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function TileEvent({
  title,
  onClick,
  color = "blue",
}: TileEventProps) {
  return (
    <Button
      onClick={onClick}
      className={`p-1 ${styleColor[color]} text-white font-semibold rounded-md`}
    >
      {title}
    </Button>
  );
}
