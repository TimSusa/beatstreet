
import styles from "../styles/Home.module.css";

export default function Chat() {
  return (
    <div className={styles.container}>
      <main>
        <iframe
          src="https://discord.com/widget?id=948422756477833216&theme=dark"
          width="350"
          height="200"
          allowtransparency="true"
          frameBorder={0}
          //sandbox="allow-scripts allow-same-origin"
          style={{
            border: 0,
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        ></iframe>
      </main>
    </div>
  );
}
