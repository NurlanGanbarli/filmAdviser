import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/_models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies(timeWindow: string): Observable<Array<Movie>> {
    return this.http.get<any>(`${environment.webApiUrl}/Movie/Trending`, {
      params: new HttpParams().set('timeWindow', timeWindow)
      }).pipe(map((x: any) => {
        console.log(x);
        return x.map((m: any) => new Movie(m));
      })
    );
  }

  constructor(private http: HttpClient) { }
}
