import { createContext, useContext, useState, useEffect } from "react";
import NchanSubscriber from "nchan";

const AppContext = createContext();

export function AppWrapper({ children }) {
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
      throw new Error(error)
    });
    sub.start();

    // return function()
    // {
    //     sub.cancel()
    // }
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
