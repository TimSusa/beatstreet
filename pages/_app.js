
import { Navigation } from "../components/Navigation";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import {PlayInfo} from '../components/PlayInfo'

function MyApp({ Component, pageProps, playing }) {


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
                width: "70%",
              }}
            >
              <source
                src="https://fm.soundzmuzicradio.com/radio/8000/radio.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>

          {/* <iframe
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
          ></iframe> */}
        </div>
      </header>
      <Component {...pageProps} />

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default MyApp;



