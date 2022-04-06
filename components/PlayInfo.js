import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useInterval } from "../utils/useInterval";

export function PlayInfo() {
  const [data, setData] = useState(null);

  useInterval(() => {
    fetch("https://fm.soundzmuzicradio.com/api/nowplaying")
      .then((res) => res.json())
      .then((tmp) => {
        if (tmp[0]?.now_playing.song.title !== data[0]?.now_playing.song.title) {
          setData(tmp[0]);
        }
      });
  }, 1000 * 60);

  useEffect(() => {
    fetch("https://fm.soundzmuzicradio.com/api/nowplaying")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
      });
  }, []);

  if (!data) return <div></div>;
  console.log(data)
  return (
    <div
      className={styles.card}
      style={{
        display: "flex",
        border: 0,
        //width: "70%",
        // marginLeft: "2%",
        // marginRight: "2%",
      }}
    >
      <div
        style={{
          border: 0,
          borderRadius: 5,
          width: "150px",

          textAlign: "center",
          //margin: "auto",
          padding: 8,
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
          padding: "2%",
          height: "150px",
          borderRadius: 5,
          background: data?.live.is_live ? '#9d1b1b96' : 'inherit',
          overflowY: 'scroll'

        }}
      >
        <h3 className={styles.h3}>Now Playing:</h3>
        <p>{data?.now_playing.song.title}</p>
        <p>{data?.now_playing.song.artist}</p>
        <p>{data?.now_playing.song.text}</p>
        <p>{data?.live.is_live ? 'LIVE ON AIR' : 'Mix Recording'}</p>
        <p> Total Listeners: {data?.listeners.total}</p>
        <br></br>
        <h3 className={styles.h3}>Next Playing:</h3>
        <p>{data?.playing_next.song.artist}</p>
        <p>{data?.playing_next.song.title}</p>
      </div>
    </div>
  );
}