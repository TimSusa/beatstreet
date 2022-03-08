/* eslint-disable @next/next/no-script-component-in-head */
import Head from "next/head";
// import Image from "next/image";
// import Script from "next/script";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const WidgetBotComponent = dynamic(
  () => import("@widgetbot/react-embed"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beatstreet</title>
        <meta name="description" content="Nonstop Club Sounds" />
        <meta charSet="utf-8" />
        <link
            href="https://fonts.googleapis.com/css?family=Sacramento:300,400,700,900"
            rel="stylesheet"
          />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.neonText}>
          <a href="https://beatstreet.dance">Beat Street</a>
        </h1>

        {/* <div className={styles.description}>
          Underground Dance Music Nonstop
        </div> */}

        <iframe
          className={styles.card}
          src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/embed?theme=dark"
          frameBorder="1"
          style={{ minHeight: 100, minWidth: "90%", border: 0 }}
        ></iframe>

        {/* <div className={styles.description}>
          <a href="/beatstreet.pls" target="_blank">
            Open Player .pls
          </a>
          <div className={styles.description}></div>
          <a href="/beatstreet.m3u" target="_blank">
            Open Player .m3u
          </a>
        </div> */}

        <iframe
          src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/history?theme=dark"
          frameBorder="0"
          className={styles.card}
          style={{ minHeight: 150, minWidth: "90%" }}
        ></iframe>
         <iframe 
        src="https://player.twitch.tv/?channel=just__joe_&parent=beatstreet.dance" 
        frameBorder="0" 
        className={styles.card}
        style={{ minHeight: 150, minWidth: "90%" }}
        scrolling="no" 
        height="378" 
        width="620"
        >

<iframe src="https://www.twitch.tv/embed/just__joe_/chat?parent=beatstreet.dance"
        frameBorder="0" 
        className={styles.card}
        style={{ minHeight: 150, minWidth: "90%" }}
        height="378" 
        width="620">
</iframe>

        </iframe> 
        <WidgetBotComponent 
        server="948422756477833216" 
        channel="948422756976963634"
        height="300"
        style={{  minWidth: "90%" }}
        />
        <iframe
          className={styles.card}
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23039BE5&ctz=America%2FNew_York&mode=WEEK&showPrint=0&showTitle=0&showNav=0&showTabs=1&showCalendars=1&src=YmVhdHN0cmVldHBvc3RAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          height="600"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "90%" }}
        ></iframe>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
