import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactModal from "react-modal";
import createUrqlClient from "../lib/createUrqlClient";
import { Provider } from "urql";

ReactModal.setAppElement("#__next");
const client = createUrqlClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
