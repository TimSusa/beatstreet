import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>

                    {/* <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-QX2P5KTSFS`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-QX2P5KTSFS', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    /> */}
                       
      <meta name="description" content="Nonstop Club Sounds" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Sacramento:300,400,700,900&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

// export default function Document() {
//   return (
//     <Html>
//       <Head />

//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

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