import { Navigation } from "../components/Navigation";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import { PlayInfo } from "../components/PlayInfo";
// import * as ga from "../lib/analytics";
// import { useEffect } from "react";
// import Router from "next/router";
// import { route } from "next/dist/server/router";
// import { useRouter } from "next/router";

function MyApp({ Component, pageProps, playing }) {
  //const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     ga.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <div>
      <header>
        <Navigation></Navigation>
        <div className={styles.container}>
          <div className={styles.h1}>
            <h1 className={styles.neonText}>
              <a href="https://beatstreet.dance">Beat Street</a>
            </h1>
          </div>
          <div className={styles.main}>
            <PlayInfo></PlayInfo>
            <audio
              controls
              style={{
                border: 0,
                width: "80%",
                marginBottom: 16,
              }}
            >
              <source
                src="https://fm.soundzmuzicradio.com/radio/8000/radio.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      </header>
      <Component {...pageProps}/>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default MyApp;
