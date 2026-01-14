import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
//
import { AppExplorer } from "@/components/atoms/app-explorer";
import { SplashScreen } from "@/components/atoms/splash-screen";
import { useSplashScreen } from "@/hooks/use-splash-screen";
import { PROTOTYPING } from "@/constants/PROTOTYPING";
import "@/styles/globals.css";

const fontPrimary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useSplashScreen();

  return PROTOTYPING.splash.loader || loading ? (
    <SplashScreen />
  ) : (
    <div className={`${fontPrimary.variable} ${fontPrimary.className}`}>
      <AppExplorer />
      <Component {...pageProps} />
    </div>
  );
}
