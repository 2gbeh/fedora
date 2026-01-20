import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
//
import { Toaster } from "@/components/shadcn/ui/sonner-v2";
import { AppExplorer } from "@/components/atoms/app-explorer";
import { SplashScreen } from "@/components/atoms/splash-screen";
import { AuthProvider } from "@/components/providers/auth-provider";
import { useSplashScreen } from "@/hooks/use-splash-screen";
import { MOCK } from "@/constants/MOCK";
import "@/styles/globals.css";

const fontPrimary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const { loading } = useSplashScreen();

  return (
    <AuthProvider>
      {MOCK.splash.loader || loading ? (
        <SplashScreen />
      ) : (
        <div className={`${fontPrimary.variable} ${fontPrimary.className}`}>
          <AppExplorer />
          <Component {...pageProps} />
        </div>
      )}
      <Toaster position="top-right" />
    </AuthProvider>
  );
}
