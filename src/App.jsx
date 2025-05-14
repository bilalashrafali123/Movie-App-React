import React from "react";
// import MovieCard from "./Components/MovieCard";
import "./css/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Pages/Favorites";
import NavBar from "./Components/NavBar";

const App = () => {
  
  return (
    <div>
      <NavBar />
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/favorites" element={<Favorites/>} />

    </Routes>
    </main>
    </div>
  )
};

export default App;
