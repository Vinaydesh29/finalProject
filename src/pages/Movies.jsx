import { useState, useEffect } from "react";
import UserPagination from "../Components/UserPagination";
import axios from "axios";
import MovieCard from "./MovieCard";
import ChipClick from "../Components/ChipClick";

function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [genre, setGenre] = useState([]);
  const [id, setId] = useState("");
  const dataId = (val) => {
    setId(val);
  };

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
    const genres = async () => {
      //
      await axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=a9fcb33911f46a7aabb349c6851d0f8a"
        )
        .then((result) => {
          setGenre(result.data.genres);
        });
    };

    testing();
    genres();
  }, [page]);
  const filteredContent = id
    ? content.filter((movie) => movie.genre_ids.includes(Number(id)))
    : content;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          fontSize: "40px",
        }}
      >
        DISCOVER MOVIES
      </h1>
      <ChipClick genre={genre} dataId={dataId} />
      {id
        ? filteredContent.map((items, index) => {
            return (
              <MovieCard
                key={index}
                poster={items.poster_path}
                title={items.title}
                date={items.release_date}
                vote={items.vote_average}
                name={items.name}
                type={"movie"}
              />
            );
          })
        : content &&
          content.map((items, index) => {
            return (
              <MovieCard
                key={index}
                poster={items.poster_path}
                title={items.title}
                date={items.release_date}
                vote={items.vote_average}
                name={items.name}
                type={"movie"}
              />
            );
          })}
      <UserPagination setPage={setPage} totalPages={totalPages} />
    </>
  );
}
export default Movies;
