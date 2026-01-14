import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
//
import { AppExplorer } from "@/components/atoms/app-explorer";
import "@/styles/globals.css";

const fontPrimary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${fontPrimary.variable} ${fontPrimary.className}`}>
      <AppExplorer />
      <Component {...pageProps} />
    </div>
  );
}
