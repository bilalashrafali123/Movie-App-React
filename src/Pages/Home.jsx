import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"

const Home = () => {
  const movies = [
    {
      id: 1,
      title: "john wick",
      release_date: "2020",
    },
    {
      id: 2,
      title: "terminator",
      release_date: "2006",
    },
    {
      id: 3,
      title: "matrix",
      release_date: "2005",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery)
    setSearchQuery("")
  };
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
