import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList } from "./components/MovieList.jsx";
import { Favorites } from "./components/Favorites.jsx";
import { useTheme } from "./hooks/ThemeContext.jsx";
import { Header } from "./components/Header/Header.jsx";
function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <BrowserRouter basename="/MovieExplorer">
      <>
      <Header/>
      
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
