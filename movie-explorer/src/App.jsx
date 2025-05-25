import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { MovieList } from "./components/MovieList.jsx";
import { Favorites } from "./components/Favorites.jsx";
import { useTheme } from "./hooks/ThemeContext.jsx";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <BrowserRouter basename="/MovieExplorer">
      <>
        <nav>
          <Link to="/">Movie Explorer</Link>
          <Link to="/favorites">Favorite Movies</Link>
        </nav>
        <button type="button" onClick={toggleTheme}>
          theme({theme === "dark" ? "light" : "dark"})
        </button>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
