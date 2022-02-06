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

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  size?: keyof typeof styleSize;
  children?: ReactChild[] | ReactChild;
};

const Input = forwardRef(
  ({ children, size = "md", className, ...props }: InputProps, ref) => {
    return (
      <input
        className={`${styleSize[size]} ${className} ring-1 ring-slate-300 `}
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
