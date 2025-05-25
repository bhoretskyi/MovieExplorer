import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useCachedFetch } from "../hooks/useCachedFetch";
// import icon from '../../src/assets/heart-svgrepo-com.svg'
const API_KEY = "912f8b69";

export const MovieList = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [favoriteList, setFavoriteList] = useState([])

  const debouncedQuery = useDebounce(query, 500);
  const url = debouncedQuery
    ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${debouncedQuery}&page=${page}`
    : null;
  const { data } = useCachedFetch(url ?? "");
  const movies = data?.Search || [];

  useEffect(() => {
    const favorites = localStorage.getItem("favorites");
    if (favorites === "[null]") {
      localStorage.setItem("favorites", "[]");
    }
  }, [favoriteList]);
  const addToFavorites = (movie) => {
    if (!movie || !movie.imdbID) {
      console.log("there is no movie");
      return;
    }
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteList(favorites)

    const added = favorites.find((i) => i.imdbID === movie.imdbID);
    if (added) {
      const filteredFavorites = favorites.filter(
        (i) => i.imdbID !== movie.imdbID
      );
      console.log(filteredFavorites);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    } else {
      const newFavorites = [...favorites, movie];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    }
  };

  const isFavorite = (movie) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    return favorites.some((i) => i.imdbID === movie.imdbID);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />
      {movies.map((movie) => {
        const favorite = isFavorite(movie);
        return (
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

            <svg
              onClick={() => {
                addToFavorites(movie);
              }}
              width="50px"
              height="50px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              fill={favorite ? "red" : "white"}
            >
              <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
            </svg>
          </div>
        );
      })}
      <button type="button" onClick={() => setPage((prev) => prev - 1)}>
        prev page
      </button>
      <button type="button" onClick={() => setPage((prev) => prev + 1)}>
        next page
      </button>
    </>
  );
};
