import { SVGProps } from "react";

export default function ArrowRight({
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
        d="M9 16a8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8 8 8 0 0 0 8 8ZM7 4.154c.186-.205.775-.205.96 0l4.9 3.467a.567.567 0 0 1 0 .745l-4.9 3.48c-.185.205-.774.205-.96 0V4.154Z"
        fill="#94A3B8"
        fillRule="evenodd"
      />
    </svg>
  );
}
