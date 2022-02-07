import Button, { ButtonProps } from "./Button";

type TileProps = ButtonProps & {
  date: number;
};

export default function Tile({ date, className, ...props }: TileProps) {
  return (
    <Button className={` ${className}`} {...props}>
      <h1 className="-mt-2 text-center font-semibold text-gray-500 text-lg">
        {date}
      </h1>
    </Button>
  );
}
