import { DetailedHTMLProps, InputHTMLAttributes, ReactChild } from "react";

type CheckboxProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  children: ReactChild | ReactChild[];
};

export default function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <label>
      <input type="checkbox" {...props}></input>
      {children}
    </label>
  );
}
