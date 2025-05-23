import { useEffect, useState } from "react";
import "./App.css";
import { getPosters } from "./api/getPosters";
function App() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getPosters("cat").then((data) => {
      console.log(data.Search);
      setMovie(data.Search);
    });
  }, []);
  return (
    <>
      <h1>Media Explorer</h1>
      {movie.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </>
  );
}

export default App;
