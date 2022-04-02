import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";

const WidgetBotComponent = dynamic(() => import("@widgetbot/react-embed"), {
  ssr: false,
});

export default function Chat() {
  return (
    <div className={styles.container}>
      <main>
      <iframe 
      src="https://discord.com/widget?id=948422756477833216&theme=dark" 
      width="350" height="200" 
      allowtransparency="true" 
      frameBorder={0}
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      style={{ border: 0, width: "90%", marginLeft: "5%", marginRight: "5%" }}
      >

      </iframe>
        {/* <WidgetBotComponent
          id="bot"
          server="948422756477833216"
          channel="948422756976963634"
          height="300"
          defer={false}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{ border: 0, width: "90%", marginLeft: "5%", marginRight: "5%" }}
          
        /> */}
      </main>
    </div>
  );
}
