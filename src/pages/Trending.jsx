import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
function Trending() {
  const [content, setContent] = useState([]);
  useEffect(() => {
    let test = fetch("https://jsonplaceholder.typicode.com/posts")
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
  const data = content.map((items) => {
    return [items.body];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = itemsPerPage * currentPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const TotalPages = Math.ceil(data.length / itemsPerPage);
  const HandleNumber = (number) => {
    setCurrentPage(number);
  };
  return (
    <>
      <h1>Trending</h1>
      {currentItems.map((items, index) => {
        return <MovieCard key={index} data={items} />;
      })}
      <div>
        {Array.from({ length: TotalPages }, (_, i) => i + 1).map((number) => {
          return (
            <button
              key={number}
              onClick={() => HandleNumber(number)}
              style={{ width: "5%" }}
            >
              {number}
            </button>
          );
        })}
      </div>
    </>
  );
}
export default Trending;
