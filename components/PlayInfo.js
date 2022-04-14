import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NchanSubscriber from "nchan";

export function PlayInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let sub = new NchanSubscriber(
      `https://fm.soundzmuzicradio.com/api/live/nowplaying/soundzmuzicradio`
    );
    let nowPlaying;
    sub.on("message", function (message, message_metadata) {
      nowPlaying = JSON.parse(message);
      setData(nowPlaying);
    });

    sub.on("error", function (eror) {
      console.error(eror);
    });
    sub.start();
  }, []);

  if (!data) return <div></div>;

  return (
    <div
      className={styles.card}
      style={{
        display: "flex",
        border: 0,
      }}
    >
      <div
        style={{
          border: 0,
          borderRadius: 5,
          width: "150px",
          margin: "auto 4px auto 4px",
          textAlign: "center",
          //margin: "auto",
          //padding: 8,
        }}
      >
        <Image
          alt={data?.now_playing.song.text}
          width="100%"
          height="100%"
          layout="responsive"
          src={data?.now_playing.song.art}
        ></Image>
      </div>

      <div
        style={{
          border: 0,
          marginLeft: 8,
          borderRadius: 5,
          background: data?.live.is_live ? "#9d1b1b96" : "none",
        }}
      >
      <h4>{data?.live.is_live ? "LIVE ON AIR:" : "Now:"}</h4>
        <p>{data?.now_playing.song.artist}</p>
        <p>{data?.now_playing.song.title}</p>
        <p>{data?.now_playing.song.text}</p>

        <h4> Total Listeners: {data?.listeners.total}</h4>
      </div>
      
      <div
        style={{
          border: 0,
          marginLeft: 8,
          borderRadius: 5,
          background: data?.live.is_live ? "#9d1b1b96" : "none",
        }}
      >
<h4>Next:</h4>
        <p>{data?.playing_next.song.artist}</p>
        <p>{data?.playing_next.song.title}</p>
      </div>
    </div>
  );
}
