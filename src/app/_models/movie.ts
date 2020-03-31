export class Movie {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  genres: Array<string>;
  releaseDate: string;
  languages: Array<string>;
  voteAverage: number;
  budget: number;
  status: string;
  tagline: string;
  popularity: number;
  voteCount: number;
  productionCountries: Array<string>;
  productionCompanies: Array<ProductionCompanies>;
  videos: Array<Video>;

  constructor(init?: Partial<Movie>) {
    Object.assign(this, init);

    // if (init.genres) {
    //   this.genres = init.genres.map(x => new Genre(x));
    // }
  }
}



// class Genre {
//   id: number;
//   name: string;

//   constructor(init?: Partial<Genre>) {
//     Object.assign(this, init);
//   }
// }

// class ProductionCountries {
//   name: string;

//   constructor(init?: Partial<ProductionCountries>) {
//     Object.assign(this, init);
//   }
// }

class Video {
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;

    constructor(init?: Partial<Video>) {
      Object.assign(this, init);
    }
}

class ProductionCompanies {
  name: string;
  logoPath: string;
  originCountry: string;

  constructor(init?: Partial<ProductionCompanies>) {
    Object.assign(this, init);
  }
}
