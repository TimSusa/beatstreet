import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useInterval } from "../utils/useInterval";

export function PlayInfo() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useInterval(() => {
    console.log("check...");
    setLoading(true);
    fetch("https://fm.soundzmuzicradio.com/api/nowplaying")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, 1000 * 60);

  useEffect(() => {
    setLoading(true);
    fetch("https://fm.soundzmuzicradio.com/api/nowplaying")
      .then((res) => res.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <div></div>;
  return (
    <div
      className={styles.card}
      style={{
        display: "flex",
        border: 0,
        width: "70%",
        // marginLeft: "2%",
        // marginRight: "2%",
      }}
    >
      <div
        style={{
          border: 0,
          borderRadius: 5,
          width: 150,
          textAlign: "center",
          margin: "auto",
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
          width: "40%",
          marginLeft: "1%",
          marginRight: "1%",
        }}
      >
        <h3 className={styles.h3}>Now Playing:</h3>
        <p>{data?.now_playing.song.artist}</p>
        <p>{data?.now_playing.song.text}</p>
        <p>{data?.now_playing.song.title}</p>
      </div>
    </div>
  );
}
