import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Twitch() {
  useEffect(() => {
    return ()=>{
      delete window.Twitch
      window.Twitch = {}
    }
  }, []);

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
       <p> Please be aware: In order not to run two sound sources in parallel, Twitch will be muted.</p>
        <div id="twitch-embed" className={styles.card}>
        </div>
      </main>
    </div>
  );
}
