import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Script from "next/script";
import ReactPlayer from "react-player";

export default function Twitch() {
  const [isJoe, setIsJoe] = useState("joe");
  const [isChat, setIsChat] = useState(false);

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <p>
          Please be aware: In order not to run two sound sources in parallel,
          Twitch will be muted.
        </p>
        <div
          onChange={(event) => {
            setIsJoe(event.target.value);
          }}
        >
          <input type="radio" value="joe" name="uffn" /> Just Joe
          <input type="radio" value="beat" name="uffn" /> BeatStreet
        </div>

        <div className={styles.wrapper}>
          <ReactPlayer
            className={styles.player}
            playing
            controls
            //width="500px"
            minwidth="350px"
            minheight="450px"
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              twitch: {
                options: {
                  width: "100%",
                  // height: "450px",
                  muted: true,
                  autoplay: false,
                  channel: isJoe === "joe" ? "just__joe_" : "beatstreet54",
                  // Only needed if this page is going to be embedded on other websites
                  parent: ["beatstreet.dance"],
                },
              },
            }}
            url={
              isJoe === "joe"
                ? "https://www.twitch.tv/videos/1447276047"
                : "https://www.twitch.tv/beatstreet54"
            }
          />
        </div>
        <div >
          <button onClick={()=> {setIsChat(true)}}>Enable Chat</button>
          {isChat ? (         
             <iframe
            id="twitch-chat-embed"
            sandbox="allow-scripts allow-same-origin"
            src={`https://www.twitch.tv/embed/${
              isJoe === "joe" ? "just__joe_" : "beatstreet54"
            }/chat?parent=beatstreet.dance`}
            height="100%"
            width="100%"
          ></iframe>) : (<div></div>)}

        </div>
      </main>
    </div>
  );
}
