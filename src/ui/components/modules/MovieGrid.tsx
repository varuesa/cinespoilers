import type { Movie } from '../../../shared/types/movie.types';
import MovieCard from '../components/MovieCard';

interface MovieGridProps {
  id: string;
  title: string;
  movies: Movie[];
  favorites?: Movie[];
  onToggleFavorite?: (movie: Movie) => void;
}

const MovieGrid = ({
  id,
  title,
  movies,
  favorites = [],
  onToggleFavorite
}: MovieGridProps) => (
  <section className="section" id={id}>
    <div className="container d-flex f-direction-column g-8">
      <h2 className="title c-primary t-align-center">{title}</h2>

      {movies.length === 0 ? (
        <p className="text text--lg t-align-center">No movies found 😞</p>
      ) : (
        <div className="g-layout g-layout--auto-fit-columns g-8">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.some(favorite => favorite.id === movie.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  </section>
);

export default MovieGrid;