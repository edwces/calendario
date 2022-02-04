import { ButtonHTMLAttributes, DetailedHTMLProps, ReactChild } from "react";

const styleSize = {
  lg: "py-2 px-6 text-md rounded-lg",
  md: "px-2 py-1 text-sm rounded-md",
  sm: "px-1 text-sm rounded-5",
};

const styleTypes = {
  primary: "bg-white text-blue-500 shadow-lg",
  active: "bg-white text-blue-500 shadow-lg",
  disabled: "bg-slate-100 text-slate-400",
};

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children?: ReactChild | ReactChild[];
  variant?: keyof typeof styleTypes;
  size?: keyof typeof styleSize;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styleTypes[variant]} ${styleSize[size]} font-bold transition ease-out duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
