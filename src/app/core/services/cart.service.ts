import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _HttpClient: HttpClient) {}

  cartNumber: BehaviorSubject<number> = new BehaviorSubject(0);

  baseUrl: string = `https://ecommerce.routemisr.com`;

  // userToken: any = {
  //   token: localStorage.getItem('userToken'),

  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `/api/v1/cart`, {
      productId: id,
    });
  }

  getUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/cart`);
  }

  removeItemFromCart(id: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `/api/v1/cart/${id}`);
  }

  updateCart(id: string, count: number): Observable<any> {
    return this._HttpClient.put(this.baseUrl + `/api/v1/cart/${id}`, {
      count: count,
    });
  }

  clearAllCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `/api/v1/cart`);
  }

  // !================= Payment ======================

  checkOutSession(id: string | null, formValue: object): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `/api/v1/orders/checkout-session/${id}?url=https://Med7at74.github.io/FreshCart-E-Commerce`,
      {
        shippingAddress: formValue,
      }
    );
  }

  getUserOrder(id: any): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/orders/user/${id}`);
  }
}
