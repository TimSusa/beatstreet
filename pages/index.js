import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>


        {/* <div className={styles.description}>
          Underground Dance Music Nonstop
        </div> */}



        {/* <div className={styles.description}>
          <a href="/beatstreet.pls" target="_blank">
            Open Player .pls
          </a>
          <div className={styles.description}></div>
          <a href="/beatstreet.m3u" target="_blank">
            Open Player .m3u
          </a>
        </div> */}

        <iframe
          src="https://fm.soundzmuzicradio.com/public/soundzmuzicradio/history?theme=dark"
          frameBorder="0"
          className={styles.card}
          style={{ minHeight: "70vh", minWidth: "90%" }}
        ></iframe>
        {/* */}
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
