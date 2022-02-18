import { useRouter } from "next/router";
import { useContext } from "react";
import userStateContext from "../../stores/userState/userStateContext";

export default function withAuth<P>(Component: React.ComponentType<P>) {
  const Authenticator = (props: P) => {
    const router = useRouter();
    const { status } = useContext(userStateContext);

    if (status == "signOut") router.push("/dfggdfgfdgf");
    if (status == "idle") return <div>Fetching data</div>;
    return <Component {...props} />;
  };

  return Authenticator;
}
