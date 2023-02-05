import { MainLayout } from "@/layouts";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/general.sass";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
