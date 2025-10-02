import { useEffect, useState } from "react";

interface MovieSearchProps {
  onSearch: (searchTerm: string) => void;
}

const MovieSearch = ({ onSearch }: MovieSearchProps) => {
  const [input, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input);
    }, 500);

    return () => clearTimeout(handler);
  }, [input, onSearch]);

  return (
    <form className="form" aria-label="Movie search form">
      <input
        type="search"
        placeholder="🔍 Search for a movie..."
        value={input}
        onChange={(e) => setValue(e.target.value)}
        className="form__input interactive interactive--xl"
        aria-label="Search for a movie"
      />
    </form>
  );
};

export default MovieSearch;