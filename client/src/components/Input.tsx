import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  ReactChild,
} from "react";

const styleSize = {
  sm: "p-1 rounded-md",
  md: "p-2 rounded-md",
  lg: "px-2 py-3 rounded-md",
};

const styleTypes = {
  primary:
    "outline-0 ring-1 ring-blue-300 focus:outline-2 focus:outline-blue-500",
  error: "ring-2 ring-red-600 outline-none",
};

export type InputProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size"
> & {
  size?: keyof typeof styleSize;
  variant?: keyof typeof styleTypes;
  children?: ReactChild[] | ReactChild;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { children, size = "md", variant = "primary", className, ...props },
    ref
  ) => {
    return (
      <input
        className={`${styleSize[size]} ${className} ${styleTypes[variant]}`}
        ref={ref}
        {...props}
      >
        {children}
      </input>
    );
  }
);

Input.displayName = "Input";

export default Input;
