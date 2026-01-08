import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
import "./css/App.css";
// import MovieCard from "./components/MovieCard";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const movieNumber = 1;

  if (movieNumber === 1) {
  }

  const handleSearch = () => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("-------");
  };

  console.log("o app carregou!")
  return (
    <React.Fragment>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
      </MovieProvider>
    </React.Fragment>
  );
}

export default App;
