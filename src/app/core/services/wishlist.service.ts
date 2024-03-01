import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private _HttpClient: HttpClient) {}

  wishlistNumber: BehaviorSubject<number> = new BehaviorSubject(0);


  baseUrl: string = `https://ecommerce.routemisr.com`;

  addProductWishlist(productId: string): Observable<any> {
    return this._HttpClient.post(this.baseUrl + `/api/v1/wishlist`, {
      productId: productId,
    });
  }

  removeProductWishlist(productId: string): Observable<any> {
    return this._HttpClient.delete(
      this.baseUrl + `/api/v1/wishlist/${productId}`
    );
  }
  getWishlist(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/wishlist`);
  }
}
