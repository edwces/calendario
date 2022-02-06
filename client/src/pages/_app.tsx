import "../styles/globals.css";
import type { AppProps } from "next/app";
import ReactModal from "react-modal";

ReactModal.setAppElement("#__next");

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
