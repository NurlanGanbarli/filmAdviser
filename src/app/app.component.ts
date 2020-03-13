import { Component } from '@angular/core';
import { AuthenticationService } from './services/api/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmAdviser';
  //isAuth: boolean;

  constructor(public authenticationService: AuthenticationService) {
   //this.isAuth = this.authenticationService.isAuth;
  }


}
