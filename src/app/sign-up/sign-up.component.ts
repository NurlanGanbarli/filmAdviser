import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/api/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      fullname: this.fb.control('', [
        Validators.required
      ]),
      email: this.fb.control('', [
        Validators.required
      ]),
      password: this.fb.control('', [
        Validators.required
      ]),
      confirmPassword: this.fb.control('', [
        Validators.required
      ])
    });
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    console.log(this.signUpForm.value);
    this.authenticationService.signup(this.signUpForm.value).pipe(first()).subscribe(
      data => {
        console.log('Success sign up');
        this.authenticationService.login(this.f.email.value, this.f.password.value).pipe(
          first()).subscribe(x => {
            this.router.navigate(['/']);
          });
      },
      error => {
        console.log('Warning');
      }
    );
  }

  ngOnInit() {
  }

}
