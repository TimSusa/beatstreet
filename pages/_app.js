import { Navigation } from "../components/Navigation";
import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
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
          <iframe
            className={styles.card}
            src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/embed?theme=dark"
            frameBorder="1"
            style={{
              border: 0,
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </header>
      <Component {...pageProps} />

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default MyApp;
