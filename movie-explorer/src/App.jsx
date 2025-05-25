import "./App.css";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieList } from "./components/MovieList/MovieList.jsx";
import { Favorites } from "./components/Favorites/Favorites.jsx";
// import { useTheme } from "./hooks/ThemeContext.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
function App() {
  const [query, setQuery] = useState('');
  return (
    <BrowserRouter basename="/MovieExplorer">
      <>
        <Header query={query} setQuery={setQuery} />

       
        <Routes>
          <Route path="/" element={<MovieList query={query} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer/>
      </>
    </BrowserRouter>
  );
}

export default App;
