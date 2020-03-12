import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      email: this.fb.control(''),
      password: this.fb.control('')
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(
      first()).subscribe(data => {
        this.router.navigate([this.returnUrl]);
      });
  }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

}