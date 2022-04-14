import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Script from "next/script";
import ReactPlayer from "react-player";

export default function Twitch() {
  const [isJoe, setIsJoe] = useState("beat");
  const [isChat, setIsChat] = useState(false);
  const [inputUrl, setInputUrl] = useState("");

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
          <h3>Video Stream Selection:</h3>
          <div>
            {" "}
            <input
              type="button"
              value="just_joe"
              name="uffn"
              onClick={(e) => {
                setIsJoe("just_joe");
              }}
            />{" "}
            Just Joe
          </div>
          <div>
            <input
              type="button"
              value="beatstreet"
              name="uffn"
              onClick={(e) => {
                setIsJoe("beat");
              }}
            />{" "}
            BeatStreet
          </div>
        </div>
        <input
          type="text"
          value={inputUrl}
          placeholder="put video url here"
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
        />
        <div></div>

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
              twitch:
                inputUrl.length > 3
                  ? {}
                  : {
                      options: {
                        width: "100%",
                        // height: "450px",
                        muted: true,
                        autoplay: false,
                        channel:
                          isJoe === "just_joe" ? "just__joe_" : "beatstreet54",
                        // Only needed if this page is going to be embedded on other websites
                        parent: ["beatstreet.dance"],
                      },
                    },
            }}
            url={
              inputUrl
                ? inputUrl
                : isJoe === "just_joe"
                ? "https://www.twitch.tv/videos/1447276047"
                : "https://www.twitch.tv/beatstreet54"
            }
          />
        </div>
        <div>
          <button
            onClick={() => {
              setIsChat(true);
            }}
          >
            Enable Chat
          </button>
          {isChat ? (
            <iframe
              id="twitch-chat-embed"
              //sandbox="allow-scripts allow-same-origin"
              src={`https://www.twitch.tv/embed/${
                isJoe === "joe" ? "just__joe_" : "beatstreet54"
              }/chat?parent=beatstreet.dance`}
              height="450px"
              width="100%"
            ></iframe>
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </div>
  );
}
