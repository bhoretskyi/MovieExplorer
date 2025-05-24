import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MovieList } from "./components/movieList.jsx";
import { Favorites } from "./Favorites.jsx";
function App() {
  return (
    <BrowserRouter basename="/MovieExplorer">
      <>
        <nav>
          <Link to="/">Movie Explorer</Link>
          <Link to="/favorites">Favorite Movies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
