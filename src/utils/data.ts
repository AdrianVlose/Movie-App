import movies from '../data/movies.json' with { type: 'json' };

export function parseData(searchText: string) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchText.toLowerCase());
  });
}
