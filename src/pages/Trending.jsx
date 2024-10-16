import axios from "axios";
import UserPagination from "../Components/UserPagination";
import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";

function Trending() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const testing = async () => {
      //
      await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=a9fcb33911f46a7aabb349c6851d0f8a&page=${page}`
        )
        .then((result) => {
          setContent(result.data.results);
          setTotalPages(result.data.total_pages);
        });
    };
    testing();
  }, [page]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;
  // const indexOfLastItem = itemsPerPage * currentPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // const TotalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      {content &&
        content.map((items, index) => {
          return (
            <MovieCard
              key={index}
              poster={items.poster_path}
              title={items.title}
              date={items.first_air_date}
              vote={items.vote_average}
              name={items.name}
              type={items.media_type}
            />
          );
        })}
      <UserPagination setPage={setPage} totalPages={totalPages} />
    </>
  );
}
export default Trending;
