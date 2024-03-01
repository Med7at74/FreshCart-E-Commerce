import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForgetpasswordService } from 'src/app/core/services/forgetpassword.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent {
  constructor(
    private _ForgetpasswordService: ForgetpasswordService,
    private _Router: Router
  ) {}

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  userEmail: string = '';

  step1Form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  step2Form: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  });
  step3Form: FormGroup = new FormGroup({
    newPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
    ]),
  });

  forgetPassword(): void {
    let userEmailValue = this.step1Form.value;
    this.userEmail = userEmailValue.email;
    // console.log(this.step1Form.value);
    this._ForgetpasswordService.forgetPassword(userEmailValue).subscribe({
      next: (response) => {
        console.log(response);
        if (response.statusMsg == 'success') {
          this.step1 = false;
          this.step2 = true;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          });
        }
      },
      error: (err) => {
        console.log(err);

        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      },
    });
  }
  resetCode(): void {
    let code = this.step2Form.value;
    this._ForgetpasswordService.resetCode(code).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'Success') {
          this.step2 = false;
          this.step3 = true;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.status,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      },
    });
  }
  resetNewPassword(): void {
    let formValue = this.step3Form.value;

    formValue.email = this.userEmail;

    this._ForgetpasswordService.resetNewPassword(formValue).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem('userToken', response.token);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1000,
          });
          this._Router.navigate(['./home']);
          this.step1 = true;
          this.step2 = false;
          this.step3 = false;
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: err.error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      },
    });
  }
}
