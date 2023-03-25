import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["greek"],
});

const description = "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Numoen</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={"Numoen"} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={"Numoen"} />
        <meta property="og:image" content="/numoen.svg" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content={"numoen"} />
        <meta property="twitter:title" content={"Numoen"} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/numoen.svg" />
      </Head>
      <main
        className={`${inter.className} flex flex-col items-center min-h-screen p-10`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
