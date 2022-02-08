const styleColor = {
  red: "bg-red",
  purple: "bg-purple-700",
  blue: "bg-blue-600",
  orange: "bg-orange-600",
};

interface TileEventProps {
  title: string;
  color?: keyof typeof styleColor;
}

export default function TileEvent({ title, color = "blue" }: TileEventProps) {
  return (
    <article
      className={`p-1 ${styleColor[color]} text-white font-semibold rounded-md overflow-hidden whitespace-nowrap`}
    >
      {title}
    </article>
  );
}
