import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Twitch() {
  const [stripe, setStripe] = useState({});

  useEffect(() => {
    if (typeof window.twitch !== "undefined") {
      window.twitch.addEventListener(window.twitch.VIDEO_READY, () => {
        var player = window.twitch.getPlayer();
        player.pause();
      });
    }
  }, [stripe]);

  return (
    <div className={styles.container}>
      <Script
        strategy="beforeInteractive"
        src={`https://embed.twitch.tv/embed/v1.js`}
        onLoad={() => {
          window.twitch = new window.Twitch.Embed("twitch-embed", {
            width: "100%",
            height: 800,
            muted: true,
            autoplay: false,
            channel: "just__joe_",
            // Only needed if this page is going to be embedded on other websites
            parent: ["beatstreet.dance"],
          });
        }}
      />

      <main className={styles.main}>
        Please be aware not to run two players in parallel ;-)
        <div id="twitch-embed" className={styles.card}>
          <Script
            id="twitch-script"
            strategy="lazyOnload"
            onLoad={() => {
              setStripe(window.Twitch);
            }}
          />
        </div>
        {/* <iframe
          id="twitch-iframe"
          src="https://player.twitch.tv/?channel=just__joe_&parent=beatstreet.dance"
          frameBorder="0"
          className={styles.card}
          style={{ minHeight: 450, minWidth: "70%" }}
          height="378"
          width="620"
        ></iframe> */}
      </main>
    </div>
  );
}
