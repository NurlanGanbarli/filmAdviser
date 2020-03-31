import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/api/movies.service';
import { Movie } from 'src/app/_models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieId: string;
  movie: Movie;
  trailerUrl: string;

  getMovieById() {
    this.movieService.getMovieById(this.movieId, 'videos').subscribe(data => {
      this.movie = data;
      this.trailerUrl = `https://www.youtube.com/embed/${this.movie.videos[0].key}`;
      console.log(this.movie);
    });
  }

  constructor(private activeRoute: ActivatedRoute, private movieService: MoviesService) {
    this.movieId = activeRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.getMovieById();
  }

}
