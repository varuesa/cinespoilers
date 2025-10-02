import { useState } from "react";
import type { Movie } from "./shared/types/movie.types";
import Footer from "./ui/components/layouts/Footer";
import Header from "./ui/components/layouts/Header";
import Hero from "./ui/components/modules/Hero";
import MovieGrid from "./ui/components/modules/MovieGrid";
import { getMoviesFromMockData } from "./utils/movie.utils";

const FAVORITE_KEY = 'cine-spoilers-favorites';

const App = () => {
  const [movies] = useState<Movie[]>(getMoviesFromMockData());
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const stored = localStorage.getItem(FAVORITE_KEY);
    return stored ? JSON.parse(stored) : [];
  });
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggleFavorite = (movie: Movie) => {
    setFavorites(prev => {
      const exists = prev.some(favorite => favorite.id === movie.id);
      const updated = exists
        ? prev.filter(favorite => favorite.id !== movie.id)
        : [...prev, movie];
      localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <Header />
      <main className="main">
        <Hero handleSearch={setSearchTerm} />
        <MovieGrid
          id="now-showing"
          title="Now Showing 🎬"
          movies={filteredMovies}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />
        {favorites.length > 0 && (
          <MovieGrid
            id="favorites"
            title="❤️ Your Favorites ❤️"
            movies={favorites}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;