import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  errorMessage: string = '';
  btnText: string = 'Register';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router: Router) {}
  registerForm: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.maxLength(20),
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/),
      ]),
      rePassword: new FormControl(null),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[0125][0-9]{8}$/),
      ]),
    },
    { validators: [this.confirmPassword] } as FormControlOptions
  );

  confirmPassword(group: FormGroup): void {
    const password = group.get('password');
    const rePassword = group.get('rePassword');
    if (rePassword?.value == '') {
      rePassword?.setErrors({ required: true });
    } else if (rePassword?.value != password?.value) {
      rePassword?.setErrors({ mismatch: true });
    }
  }

  registerFun() {
    let userData = this.registerForm.value;
    this.isLoading = true;
    this.btnText = 'Please Wait...';
    if (this.registerForm.valid) {
      this._AuthService.register(userData).subscribe({
        next: (response) => {
          // console.log(response);
          if (response.message == 'success') {
            this.isLoading = false;
            this.btnText = 'Please Wait...';
            this._Router.navigate(['/login']);
          }
        },
        error: (err: HttpErrorResponse) => {
          // console.log(err);
          this.isLoading = false;
          this.btnText = 'Register';
          this.errorMessage = err.error.message;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
