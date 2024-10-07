import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
function Trending() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    let test = fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok) {
          let data = res.json();
          return data;
        }
      })
      .then((res) => {
        setContent(res);
      });
  }, []);
  return (
    <>
      <h1>Trending</h1>
      <MovieCard data={content} />
    </>
  );
}
export default Trending;
