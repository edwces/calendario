import Button, { ButtonProps } from "../../components/Button";
import GoogleLogo from "../../icons/GoogleLogo";

export default function GoogleLogin(props: ButtonProps) {
  return (
    <Button
      className=" inline-flex gap-5 items-center border-2 border-slate-200"
      variant="transparent"
      size="lg"
      {...props}
    >
      <GoogleLogo />
      <p className="font-roboto font-medium text-slate-500 text-xl">
        Sign with Google
      </p>
    </Button>
  );
}
