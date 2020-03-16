import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesOfToday: Array<any>;
  moviesOfWeek: Array<any>;

  getMovies(timeWindow: string) {
    if (timeWindow === 'day') {
      return this.http.get<any>(`${environment.webApiUrl}/Movie/Trending`, { timeWindow }).pipe(
        map(movie => {
          this.moviesOfToday.push(movie);
        })
      );
    } else {
      return this.http.get<any>(`${environment.webApiUrl}/Movie/Trending`, { timeWindow }).pipe(
        map(movie => {
          this.moviesOfWeek.push(movie);
        })
      );
    }
  }

  constructor(private http: HttpClient) { }
}
