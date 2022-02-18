import Button, { ButtonProps } from "../../components/Button";
import GoogleLogo from "../../icons/GoogleLogo";

export default function GoogleLogin(props: ButtonProps) {
  return (
    <Button className=" inline-flex gap-5 items-center" size="lg" {...props}>
      <GoogleLogo />
      <p className="font-roboto font-medium text-slate-500 text-xl">
        Sign with Google
      </p>
    </Button>
  );
}
