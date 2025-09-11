// TMDB API Response interfaces
export interface TMDBMovie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TMDBResponse {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

// TMDB Genre interface
export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBGenreResponse {
  genres: TMDBGenre[];
}