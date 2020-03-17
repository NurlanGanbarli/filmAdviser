import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/api/movies.service';
import { Movie } from 'src/app/_models/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public dayTrending: Array<Movie>;
  public weekTrending: Array<Movie>;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getMovies('day').subscribe(dayMovies => {
      this.dayTrending = dayMovies;
    });
    this.movieService.getMovies('week').subscribe(weekMovies => {
      this.weekTrending = weekMovies;
    });
  }

}
