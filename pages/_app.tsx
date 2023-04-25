import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "next/font/google";
import Head from "next/head";

import Layout from "@/components/layout";

const inter = Inter({
  subsets: ["greek"],
});

const description = "Decentralized derivatives exchange";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Numoen</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numoen.com" />
        <meta property="og:title" content={"Numoen"} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={"Numoen"} />
        <meta
          property="og:image"
          content="https://landing-next-jade.vercel.app/image.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={"numoen"} />
        <meta property="twitter:title" content={"Numoen"} />
        <meta property="twitter:description" content={description} />
        <meta
          property="twitter:image"
          content="https://landing-next-jade.vercel.app/image.png"
        />
      </Head>
      <main
        className={`${inter.className} flex min-h-screen flex-col items-center p-10`}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
