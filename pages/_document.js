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
