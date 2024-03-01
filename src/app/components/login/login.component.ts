import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage: string = '';
  btnText: string = 'Login';
  isLoading: boolean = false;
  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _FormBuilder: FormBuilder
  ) {}

  // !_=======> login form using form group method ============
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [
  //     Validators.required,
  //     Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
  //   ]),
  // });

  // !_=======> login form using form BUilder method  ============

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)],
    ],
  });

  // !_=======> login or Submit form   ============

  loginFun() {
    const userData = this.loginForm.value;
    // console.log(this.loginForm.value);
    this.isLoading = true;
    this.btnText = 'Please Wait...';

    if (this.loginForm.valid) {
      this._AuthService.login(userData).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message == 'success') {
            this.isLoading = false;
            this.btnText = 'Please Wait...';
            localStorage.setItem('userToken', response.token);
            this._AuthService.decodeUserToken(); // <====== decode the token and get the data of the user *

            this._Router.navigate(['/home']);
          } else {
            alert('hi');
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.btnText = 'Login';
          this.errorMessage = err.error.message;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      this.btnText = 'login ';
      this.isLoading = false;
    }
  }
}
