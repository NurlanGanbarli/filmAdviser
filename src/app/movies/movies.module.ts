import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { PosterPipeModule } from '../_pipes/poster-pipe/poster.module';


@NgModule({
  declarations: [MoviesListComponent, MovieDetailComponent, MovieCardComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    PosterPipeModule
  ],
  exports: [
    MoviesListComponent,
    MovieDetailComponent
  ]
})
export class MoviesModule { }
