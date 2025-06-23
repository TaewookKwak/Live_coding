import { useState } from "react";
import "./styles.css";

export default function App(): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <h1>Dropdown</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div style={{ position: "relative", backgroundColor: "lightgray" }}>
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          드롭다운 열기
        </button>
        {isOpen ? (
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              backgroundColor: "lightblue",
              position: "absolute",
              left: "50%",
              transform: "translate(-50%)",
              width: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <li className="list">1123123</li>
            <li className="list">1123123123</li>
            <li className="list">13124241</li>
            <li className="list">12412412</li>
            <li className="list">141241</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}
