import styles from "../styles/Home.module.css";

export default function Home(props) {
  const {listeners} = props;
console.log('hiome ', props)
  return (
    <div >
      <main className={styles.main}>
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
