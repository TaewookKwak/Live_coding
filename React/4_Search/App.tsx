import { useEffect, useState } from "react";
import "./styles.css";
import useDebounce from "./useDebounce";

type DataProps = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

const ITEMS: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export default function App() {
  const [keyword, setKeyword] = useState<string>("");
  const [filteredList, setFilteredList] = useState<string[]>(ITEMS);
  const debounceKeyword = useDebounce<string>(keyword, 500);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setKeyword(value);
  }

  function handleSearch(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
  }

  useEffect(() => {
    if (!debounceKeyword) return;
    const list = ITEMS.filter((item: string) =>
      item.toLocaleLowerCase().includes(debounceKeyword.toLowerCase())
    );
    setFilteredList(list);
  }, [debounceKeyword]);

  return (
    <div className="App">
      <h1>Search</h1>
      <form action="submit">
        <input
          id="search-input"
          aria-label="검색창"
          type="text"
          value={keyword}
          placeholder="serach..."
          onChange={handleInput}
        />
        <button onClick={handleSearch}>검색</button>
      </form>

      <ul>
        {filteredList.map((v) => {
          return <li key={v}>{v}</li>;
        })}
      </ul>
    </div>
  );
}
