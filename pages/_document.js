import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Beatstreet</title>
      <meta name="description" content="Nonstop Club Sounds" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Sacramento:300,400,700,900&display=swap"
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

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // revalidation is enabled and a new request comes in
// export async function getServerSideProps() {
//   const res = await fetch('https://fm.soundzmuzicradio.com/api/live/nowplaying')
//   const playing = await res.json()

//   return {
//     props: {
//       playing,
//     },
//     // Next.js will attempt to re-generate the page:
//     // - When a request comes in
//     // - At most once every 10 seconds
//     revalidate: 15*60, // In seconds
//   }
// }