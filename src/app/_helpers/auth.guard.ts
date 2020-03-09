import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from 'src/app/services/api/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService;

    if (currentUser) {
      // authorised so return true
      return true;
    }

    // not logged in so redirect to home page with return url
    this.router.navigate(['/'], {queryParams: { returnUrl: state.url}});
    return false;
  }

}
