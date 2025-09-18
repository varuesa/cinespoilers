import { genreMap, tmdbNowPlayingMock } from "../shared/mocks/tmdb.mock";
import type { Movie } from "../shared/types/movie.types";
import type { TMDBMovie } from "../shared/types/tmdb.types";

// Generate TMDB image URLs with fallback
export const getImageUrl = (size = 'w342', path: string | null) => {
  if (!path) return 'https://picsum.photos/342/513?random=1';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

// Transform TMDB movie data to our Movie interface
export const adaptTmdbToMovie = (tmdbMovie: TMDBMovie): Movie => {
  const primaryGenre = tmdbMovie.genre_ids
    .map(id => genreMap[id])
    .filter(Boolean)[0] || 'Drama';

  return {
    id: tmdbMovie.id,
    title: tmdbMovie.title,
    rating: Number((tmdbMovie.vote_average / 2).toFixed(1)), // Convert 10-scale to 5-scale
    genre: primaryGenre,
    duration: '120 min', // Default duration (would come from detailed API in real app)
    image: getImageUrl('w342', tmdbMovie.poster_path),
    description: tmdbMovie.overview || 'No description available.',
    showTimes: ['2:30 PM', '5:45 PM', '9:00 PM', '11:30 PM'], // Mock showtimes
    releaseDate: tmdbMovie.release_date
  };
};

// Get transformed movies from mock data
export const getMoviesFromData = (): Movie[] => {
  return tmdbNowPlayingMock.results.map(adaptTmdbToMovie);
};