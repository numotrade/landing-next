import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["greek"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main
        className={`${inter.className} flex flex-col items-center min-h-screen p-10`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
