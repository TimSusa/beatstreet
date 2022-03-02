/* eslint-disable @next/next/no-script-component-in-head */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const AblyChatComponent = dynamic(
  () => import("../components/AblyChatComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beatstreet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.neonText}>
          <a href="https://beatstreet.dance">beatstreet</a>
        </h1>

        <div className={styles.description}>
          Underground Dance Music Nonstop
        </div>

        <iframe
          className={styles.card}
          src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/embed?theme=dark"
          frameBorder="1"
          style={{ minHeight: 100, minWidth: "90%", border: 0 }}
        ></iframe>

        <div className={styles.description}>
          <a href="/beatstreet.pls" target="_blank">
            Open Player .pls
          </a>
          <div className={styles.description}></div>
          <a href="/beatstreet.m3u" target="_blank">
            Open Player .m3u
          </a>
        </div>

        <iframe
          src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/history?theme=dark"
          frameBorder="0"
          className={styles.card}
          style={{ minHeight: 150, minWidth: "90%" }}
        ></iframe>
        {/* <iframe
          className={styles.card}
          src="https://discord.com/widget?id=948422756477833216&theme=dark"
          width="650"
          height="600"
          frameBorder="0"
          id= "chatwidget"
          name= "chatwidget"
          style={{ minHeight: 150, minWidth: "90%" }}
        ></iframe> */}
        <iframe
          className={styles.card}
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23039BE5&ctz=America%2FNew_York&mode=WEEK&showPrint=0&showTitle=0&showNav=0&showTabs=1&showCalendars=1&src=YmVhdHN0cmVldHBvc3RAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          height="600"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "90%" }}
        ></iframe>
        <iframe src="https://e.widgetbot.io/channels/948422756477833216/948435054995050556" height="600" 
        width="800"
        style={{ minHeight: 150, minWidth: "90%" }}
        ></iframe>
        <div className={styles.card}>
          <AblyChatComponent />{" "}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
