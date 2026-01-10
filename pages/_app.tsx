import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Explorer } from "@/components/atoms/explorer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Explorer />
      <Component {...pageProps} />
    </>
  );
}
