import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/api/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [
        Validators.required
      ]),
      password: this.fb.control('', [
        Validators.required
      ])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(
      first()).subscribe(data => {
        this.router.navigate([this.returnUrl]);
        this.authenticationService.getCurrentUser().subscribe(user => {
          console.log(user);
        });
      });
  }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}
