import React, { useState } from "react";
import "./styles.css";

type ListProps = {
  value: string;
  id: number;
};

export default function App(): JSX.Element {
  const [text, setText] = useState<string>("");
  const [list, setList] = useState<ListProps[]>([]);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setText(value);
  }

  function handleAdd(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();

    if (text.trim() === "") {
      return;
    }

    setList([...list, { value: text.trim(), id: Date.now() }]);
    setText("");
  }

  function handleDelete(id: number): void {
    const newList = [...list];
    const updatedList = newList.filter((list) => list.id !== id);
    setList(updatedList);
  }
  return (
    <div className="App">
      <h1>Todo 리스트</h1>
      <form>
        <input type="text" value={text} onChange={handleChangeInput} />
        <button onClick={handleAdd}>추가</button>
      </form>
      <ul>
        {list.map(({ value, id }, index: ListProps) => {
          return (
            <li
              key={id}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p>{value}</p>
              <button type="submit" onClick={() => handleDelete(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
