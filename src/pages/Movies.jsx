import { useState, useEffect } from "react";
import UserPagination from "../Components/UserPagination";
import axios from "axios";
import MovieCard from "./MovieCard";
function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const testing = async () => {
      //
      await axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=a9fcb33911f46a7aabb349c6851d0f8a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}`
        )
        .then((result) => {
          setContent(result.data.results);
          setTotalPages(result.data.total_pages);
        });
    };
    testing();
  }, [page]);
  return (
    <>
      {content &&
        content.map((items, index) => {
          return (
            <MovieCard
              key={index}
              poster={items.poster_path}
              title={items.title}
              date={items.release_date}
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
export default Movies;
