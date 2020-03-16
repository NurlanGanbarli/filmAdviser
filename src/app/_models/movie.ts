export class Movie {
  id: number;
  title: string;
  posterPath: string;
  genres: Array<Genre>;
  releaseDate: string;
  originalLanguage: string;
  voteAverage: number;

  constructor(init?: Partial<Movie>) {
    Object.assign(this, init);

    if (init.genres) {
      this.genres = init.genres.map(x => new Genre(x));
    }
  }
}



class Genre {
  id: number;
  name: string;

  constructor(init?: Partial<Genre>) {
    Object.assign(this, init);
  }
}
