// Core Movie interface for our cinema application
export interface Movie {
  id: number;
  title: string;
  rating: number;
  genre: string;
  duration: string;
  image: string;
  description: string;
  showTimes: string[];
  releaseDate: string;
}

// Component props interfaces
export interface MovieCardProps {
  movie: Movie;
}

export interface MovieListProps {
  movies: Movie[];
}

// Genre mapping type
export interface GenreMap {
  [key: number]: string;
}