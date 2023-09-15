import { Head, Html, Main, NextScript } from "next/document";

const description = "cyrptocurrency derivatives exchange";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numoen.com" />
        <meta property="og:title" content={"Numoen"} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={"Numoen"} />
        <meta property="og:image" content="https://numoen.com/image.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content={"numoen"} />
        <meta property="twitter:title" content={"Numoen"} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://numoen.com/image.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
