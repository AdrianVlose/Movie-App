import movies from '../data/movies.json' with { type: 'json' };

export function parseData(searchText: string, selectedGenre: string) {
  const moviesMatchedByText = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  });
  const moviesMatchedByTextAndGenre = moviesMatchedByText.filter((movie) => {
    return selectedGenre === 'all genres'
      ? true
      : movie.genre === selectedGenre;
  });

  return moviesMatchedByTextAndGenre.sort(
    (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
  );
}
