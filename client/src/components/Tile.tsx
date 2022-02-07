import Button, { ButtonProps } from "./Button";

type TileProps = ButtonProps & {
  date: string;
};

export default function Tile({ date, ...props }: TileProps) {
  return (
    <Button {...props}>
      <h1 className="mb-16 m-1 font-semibold text-gray-500 text-lg">{date}</h1>
    </Button>
  );
}
