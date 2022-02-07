import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import Input, { InputProps } from "./Input";

type InputFieldProps = UseControllerProps<FieldValues, string> &
  InputProps & {
    label?: string;
  };

export default function InputField({
  label,
  defaultValue = "",
  ...props
}: InputFieldProps) {
  const {
    field,
    fieldState: { error },
  } = useController({
    ...props,
    defaultValue,
  });

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className=" text-lg font-semibold text-slate-600">{label}</label>
      )}
      <Input
        {...props}
        {...field}
        variant={error ? "error" : "primary"}
      ></Input>
      {error && <p className="text-sm text-red-600">{error?.message}</p>}
    </div>
  ); // send input ref, so we can focus on input when error appear></Input>
}
