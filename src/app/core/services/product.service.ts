import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = `https://ecommerce.routemisr.com`;

  getAllProduct(pageNum: number = 1): Observable<any> {
    return this._HttpClient.get(
      this.baseUrl + `/api/v1/products?page=${pageNum}`
    );
  }
  // the category of the slider
  getCategory(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/categories`);
  }
  getProductDetails(id: string | null): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/products/${id}`);
  }

  getSpacificCategory(id: string | null): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/categories/${id}`);
  }

  getBrands(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/brands`);
  }

  getSpaceficBrand(id: string | null): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `/api/v1/brands/${id}`);
  }
}
