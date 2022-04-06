import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Beatstreet</title>
      <meta name="description" content="Nonstop Club Sounds" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Sacramento:300,400,700,900\&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
