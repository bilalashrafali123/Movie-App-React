import React from "react";
// import MovieCard from "./Components/MovieCard";
import "./css/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
