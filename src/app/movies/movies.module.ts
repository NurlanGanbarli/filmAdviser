import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent, HeaderComponent, LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
    MoviesListComponent,
    MovieDetailComponent,
    HeaderComponent
  ]
})
export class MoviesModule { }
