import Image from "next/image";
import { useAppContext } from "../components/Context";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const data = useAppContext();
  return (
    <div>
      <main className={styles.main}>
        <div
          className={styles.card}
          style={{ maxHeight: 400, overflowY: "scroll"}}
        >
          <h3>History:</h3>
          {data?.song_history.map(function (item, idx) {
            return (
              <div
                key={`history${idx}`}
                style={{
                  display: "flex",
                  marginBottom: 8,
                  borderRadius: 5,
                  border: "1px solid grey",
                }}
              >
                <div
                  style={{
                    padding: 8,
                    margin: 8,

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
                    width="100%"
                    height="100%"
                    layout="responsive"
                    src={item.song.art}
                    alt={item.song.album}
                  />
                </div>
                <div>
                  <p>{item.song.artist}</p>
                  <p>{item.song.title}</p>
                  <p>{item.song.album}</p>
                  <p>{item.song.text}</p>
                  <p>{Date(item.played_at)}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.card}>
          <p>Open in external Player: </p>
          <a href="/beatstreet.pls" target="_blank">
            Download .pls
          </a>
          <br></br>
          <a href="/beatstreet.m3u" target="_blank">
            Download .m3u
          </a>
          <div className={styles.description}></div>
        </div>
        {/* 
        <iframe
          className={styles.card}
          src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23039BE5&ctz=America%2FNew_York&mode=WEEK&showPrint=0&showTitle=0&showNav=0&showTabs=1&showCalendars=1&src=YmVhdHN0cmVldHBvc3RAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uZ2VybWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
          height="600"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "90%" }}
        ></iframe> */}
      </main>
    </div>
  );
}
