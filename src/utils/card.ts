export function classifyRating(rating: number) {
  if (rating < 5) {
    return 'movie-card__rating--bad';
  }
  if (rating >= 8) {
    return 'movie-card__rating--good';
  }
  return 'movie-card__rating--ok';
}

export function convertFirstLetterToUpperCase(text: string) {
  return text.at(0)?.toLocaleUpperCase() + text.slice(1);
}
