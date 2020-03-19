import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_models/user';
import { Token } from 'src/app/_models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private tokenSubject: BehaviorSubject<Token>;
  public token: Observable<Token>;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.tokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
    this.token = this.tokenSubject.asObservable();

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userInfo')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get tokenValue(): Token {
    return this.tokenSubject.value;
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get isAuth(): boolean {
    return this.tokenValue !== null;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.webApiUrl}/Auth/Login`, { email, password}).pipe(
      map(token => {
        const jwtToken = new Token(token.token);
        localStorage.setItem('token', JSON.stringify(jwtToken));
        this.tokenSubject.next(jwtToken);
        this.getCurrentUser().subscribe(userInfo => {
          localStorage.setItem('userInfo', JSON.stringify(userInfo));
          this.currentUserSubject.next(userInfo);
        });
        return token;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);

    localStorage.removeItem('userInfo');
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): Observable<User> {
    return this.http
      .get(`${environment.webApiUrl}/Users/Current`)
      .pipe(
        map((x: any) => {
          return new User(x);
        })
      );
  }

}
