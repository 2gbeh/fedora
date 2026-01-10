import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppExplorer } from "@/components/atoms/app-explorer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppExplorer />
      <Component {...pageProps} />
    </>
  );
}
