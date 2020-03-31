import { Component, OnInit } from '@angular/core';
import { Movie } from '../_models/movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  myWishlist: Array<Movie>;

  addToWishlist(movie: Movie) {
    this.myWishlist.push(movie);
  }

  constructor() { }

  ngOnInit() {
  }

}
