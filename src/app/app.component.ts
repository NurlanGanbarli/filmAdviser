import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/api/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filmAdviser';
  user: any;
  menuOpen = false;

  getCurrentUser() {
    if (this.authenticationService.isAuth) {
      this.authenticationService.getCurrentUser().subscribe(user => {
        this.user = user;
      });
    } else {
      this.user = {};
    }
  }

  menuClick() {
    this.menuOpen = this.menuOpen === false ? true : false;
  }

  constructor(public authenticationService: AuthenticationService) {
   // this.isAuth = this.authenticationService.isAuth;
  }

  ngOnInit() {
    this.getCurrentUser();
  }

}
