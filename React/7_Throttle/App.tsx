import "./styles.css";
import { useState } from "react";
import useThrottle from "./useThrottle";
import useThrottleCallback from "./useThrottleCallback";

export default function App() {
  const [input, setInput] = useState("");
  const throttledInput = useThrottle(input, 500); // 1초마다만 반영

  const onScroll = useThrottleCallback(() => {
    console.log("스크롤 실행!", Date.now());
  }, 1000);
  return (
    <div className="App">
      <h1>Throttle</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <p>{throttledInput}</p>

      <div
        onScroll={onScroll}
        style={{
          height: "300px",
          overflow: "scroll",
          border: "1px solid black",
        }}
      >
        <div style={{ height: "1000px" }}>스크롤 해보세요</div>
      </div>
    </div>
  );
}
