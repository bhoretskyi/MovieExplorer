import { useEffect, useState } from "react";
import { MovieCard} from "../MovieList/MovieListStyled";
import { CardInfo, FavoriteButton,  List } from "./FavoritesStyled";
import { motion, AnimatePresence, animate } from "motion/react";
  const MotionList = motion(List);
  const MotionCard = motion(MovieCard)

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
  const removeFromFavorites = (movieToRemove) => {
    const filtered = favorites.filter(
      (movie) => movie.imdbID !== movieToRemove.imdbID
    );
    setFavorites(filtered);
    localStorage.setItem("favorites", JSON.stringify(filtered));
  };
  return (
    <>
      <MotionList
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {" "}
       <AnimatePresence>
         {favorites.length>=1 ? favorites.map((movie) => (
          <MotionCard key={movie.imdbID} layout initial={{opacity:0, y: 30}} animate={{opacity:1, y:0}} exit={{opacity:0, y: -30}} transition={{duration: 0.3}}>
            <CardInfo>
              {" "}
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </CardInfo>
            {movie.Poster === "N/A" ? (
              <p>there is no movie poster</p>
            ) : (
              <img
                src={movie.Poster}
                alt={movie.Title}
                height="300px"
                width="190px"
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                }}
              />
            )}
            <FavoriteButton
              type="button"
              onClick={() => {
                removeFromFavorites(movie);
              }}
            >
              Remove{" "}
               <svg
    fill="#000000"
    width="40px"
    height="40px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
  </svg>
            </FavoriteButton>
          </MotionCard>
        )) : <h1>Add your favorite movie</h1>}
       </AnimatePresence>
      </MotionList>
    </>
  );
};
