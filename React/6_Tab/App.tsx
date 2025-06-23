import { useState } from "react";
import "./styles.css";

export default function App(): JSX.Element {
  const tabs = [
    { id: 0, title: "탭1", content: <div>컨텐츠1</div> },
    { id: 1, title: "탭2", content: <div>컨텐츠2</div> },
    { id: 2, title: "탭3", content: <div>컨텐츠3</div> },
  ];
  return <Tab tabs={tabs} />;
}

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(1);
  return (
    <div>
      <nav role="tablist" aria-label="탭 목록" style={{ display: "flex" }}>
        {tabs.map(({ id, title }) => {
          const isSelected = activeTab === id;
          return (
            <button
              key={id}
              aria-selected={isSelected}
              aria-controls={`tabpanel-${id}`}
              style={{
                width: "100%",
                backgroundColor: isSelected ? "white" : "gray",
              }}
              onClick={() => setActiveTab(id)}
            >
              {title}
            </button>
          );
        })}
      </nav>
      {tabs.map(({ id, content }) =>
        activeTab === id ? (
          <div
            key={id}
            role="tabpanel"
            id={`tabpanel-${id}`}
            aria-labelledby={`tab-${id}`}
            tabIndex={0}
            style={{ padding: "16px", border: "1px solid #ccc" }}
          >
            {content}
          </div>
        ) : null
      )}
    </div>
  );
};
