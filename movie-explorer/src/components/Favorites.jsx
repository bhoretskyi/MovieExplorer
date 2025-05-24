import { useEffect, useState } from "react";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    try {
      const list = JSON.parse(localStorage.getItem("favorites")) || [];
      if (list.length >= 1) {
        if (Array.isArray(list)) {
          setFavorites(list);
        }
      }
    } catch (error) {
      console.log("Failed load", error);
    }
  }, []);
  return (
    <>
      <h1>favorites</h1>
      {favorites.map((movie) => (
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
    </>
  );
};
