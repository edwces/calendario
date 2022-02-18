import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactModal from "react-modal";
import createUrqlClient from "../lib/createUrqlClient";
import { Provider } from "urql";
import { UserStateProvider } from "../stores/userState/userStateContext";

ReactModal.setAppElement("#__next");
const client = createUrqlClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <UserStateProvider>
        <Component {...pageProps} />
      </UserStateProvider>
    </Provider>
  );
}

export default MyApp;
