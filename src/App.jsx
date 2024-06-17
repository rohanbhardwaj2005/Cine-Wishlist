import { useEffect, useState } from "react";
import AppHeader from "./components/AppHeader";
import Search from "./components/Search";



export default function App() {
  const [isChildLockOn, setisChildLockOn] = useState(true);
  const [watchedList, setWatchedList] = useState(() => {
    const localWatchedList = localStorage.getItem("watchedList");
    return localWatchedList ? JSON.parse(localWatchedList) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchedList", JSON.stringify(watchedList));
  }, [watchedList]);

  return (
    <div className="App">
      <AppHeader
        watchedList={watchedList}
        setWatchedList={setWatchedList}
        isChildLockOn={isChildLockOn}
      />
      <main>
        <Search
          watchedList={watchedList}
          setWatchedList={setWatchedList}
          isChildLockOn={isChildLockOn}
        />
      </main>
    </div>
  );
}
