import React, { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { SearchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        setError(error);
        console("failed to fetch movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const serachResults = await SearchMovies(searchQuery);
      setMovies(serachResults);
      setError(null);
    } catch (err) {
      console.log("failed to search movies...");
    } finally {
      setLoading(false);
    }
  };
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
        {error && <div className="error">{error}</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
