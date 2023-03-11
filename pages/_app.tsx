import type { AppProps } from "next/app";
import { useEffect } from "react";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const applyOSColorScheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyOSColorScheme();
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
