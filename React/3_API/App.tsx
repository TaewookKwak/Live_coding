import { useEffect, useState } from "react";
import "./styles.css";

type DataProps = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

export default function App() {
  const [data, setData] = useState<DataProps | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    //   .then((res) => {
    //     if (!res.ok) throw new Error("에러");
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    const fetchAPI = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        if (!res.ok) throw new Error("에러");

        const data = await res.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAPI();
  }, []);

  if (isLoading) return <div>로딩중입니다.</div>;

  return (
    <div className="App">
      <h1>Fetch from API</h1>
      {data ? (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      ) : null}
    </div>
  );
}
