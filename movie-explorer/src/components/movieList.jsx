import { useEffect, useState } from "react";
import { getPosters } from "../api/getPosters";

export const MovieList = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    async function getMovies() {
      try {
        const resp = await getPosters(query, page);
        setMovie(resp.Search || []);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [query, page]);
  return (
    <>
      {" "}
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <h1>Media Explorer</h1>
      {movie.map((movie) => (
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
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        next page
      </button>
      <button type="button" onClick={() => setPage((prev) => prev - 1)}>
        prev page
      </button>
    </>
  );
};
