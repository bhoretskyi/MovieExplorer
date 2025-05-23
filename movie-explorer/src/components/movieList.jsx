import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useCachedFetch } from "../hooks/useCachedFetch";
const API_KEY = "912f8b69";

export const MovieList = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const debouncedQuery = useDebounce(query, 500);
  const url = debouncedQuery
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${debouncedQuery}&page=${page}`
    : null;
  const { data } = useCachedFetch(url ?? "");
  const movies = data?.Search || [];

  return (
    <>
      {" "}
      <input type="text" onChange={(e) => {setQuery(e.target.value); setPage(1)}} />
      <h1>Media Explorer</h1>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          {movie.Poster === "N/A" ? (
            <p>there is no movie poster</p>
          ) : (
            <img
              src={movie.Poster}
              alt={movie.Title}
              onError={(e) => {
                e.target.onError = null;
                e.target.src =
                  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
              }}
            />
          )}
        </div>
      ))}
      <button type="button" onClick={() => setPage((prev) => prev - 1)}>
        prev page
      </button>
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        next page
      </button>
    </>
  );
};
