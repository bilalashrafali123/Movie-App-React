import { createContext, useEffect, useState, useContext } from "react";

const movieContext = createContext();
export const useMovieContext = () => useContext(movieContext);
export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedfavs = localStorage.getItem("favorites");
    if (storedfavs) {
      setFavorites(JSON.parse(storedfavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addtoFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieid) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieid));
  };

  const isFavorite = (movieid) => {
    return favorites.some((movie) => movie.id === movieid);
  };

  const value = {
    favorites,
    addtoFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <movieContext.Provider value={value}>
        {children}
    </movieContext.Provider>
  );
};
