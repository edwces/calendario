import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Button, { ButtonProps } from "../../components/Button";
import userStateContext from "../../stores/userState/userStateContext";

export default function LogoutButton(props: ButtonProps) {
  const { logout } = useContext(userStateContext);
  const router = useRouter();

  const onClick = async () => {
    // logout of context
    logout();

    // logout of session
    await fetch("http://localhost:3001/auth/logout", {
      credentials: "include",
    });

    // redirect
    router.push("/login");
  };

  return (
    <Button size="lg" onClick={onClick} {...props}>
      Logout
    </Button>
  );
}
