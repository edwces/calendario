import { SVGProps } from "react";

export default function ArrowLeft({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={17}
      height={17}
      viewBox="0 -0.5 17 17"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
      {...props}
    >
      <path
        d="M9 0a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8c0-4.418-3.58-8-8-8Zm2 11.846c-.186.205-.774.205-.96 0l-4.9-3.467a.563.563 0 0 1 0-.745l4.9-3.48c.185-.205.773-.205.96 0v7.692Z"
        fill="#94A3B8"
        fillRule="evenodd"
      />
    </svg>
  );
}
