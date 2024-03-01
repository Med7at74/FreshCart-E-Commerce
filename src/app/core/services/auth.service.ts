import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router: Router) {}

  usertoken: any;

  decodeUserToken() {
    const encode = localStorage.getItem('userToken');
    if (encode != null) {
      let decodeUserToken = jwtDecode(encode);
      this.usertoken = decodeUserToken;
      console.log(this.usertoken);
    }
  }

  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/auth/`;
  register(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `signup`, userData);
  }

  login(userData: object): Observable<any> {
    return this._HttpClient.post(this.baseUrl + 'signin', userData);
  }

  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userCartId');
    this._Router.navigate(['/login']);
  }
}
