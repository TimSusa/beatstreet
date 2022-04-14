import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useAppContext } from "../components/Context";

export function PlayInfo() {
  const data = useAppContext();
  console.log(data);
  if (!data) return <div></div>;
  return (
    <div
      className={styles.card}
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "stretch",
        alignItems: "stretch",
        //border: "1px solid grey",
      }}
    >
      <div
        style={{
          // border: "1px solid grey",
          padding: 8,
          margin: 8,
          borderRadius: 5,
          width: "100%",
          maxWidth: 150,
          height: "100%",
          margin: "0 4px 0 4px",
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
          //border: "1px solid grey",
          padding: 4,
          margin: "0 4px 0 0",
          // marginLeft: 8,
          borderRadius: 5,
          width: "25%",
          background: data?.live.is_live ? "#9d1b1b96" : "none",
        }}
      >
        <h5>{data?.live.is_live ? "LIVE ON AIR:" : "Now:"}</h5>
        <p>{data?.now_playing.song.artist}</p>
        <p>{data?.now_playing.song.title}</p>
        <p>{data?.now_playing.song.text}</p>
      </div>

      <div
        style={{
          // border: "1px solid grey",
          margin: "0 4px 0 0",
          padding: 4,
          minWidth: "30%",
          borderRadius: 5,
          background: data?.live.is_live ? "#9d1b1b96" : "none",
        }}
      >
        <h5>Next:</h5>
        <p>{data?.playing_next.song.artist}</p>
        <p>{data?.playing_next.song.title}</p>
      </div>

      <div
        style={{
          //border: "1px solid grey",
          padding: 4,
          minWidth: "15%",
          borderRadius: 5,
          background: data?.live.is_live ? "#9d1b1b96" : "none",
        }}
      >
        <h5>Listeners: {data?.listeners.total}</h5>
      </div>
    </div>
  );
}
