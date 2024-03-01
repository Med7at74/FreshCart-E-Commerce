import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/core/interfaces/product';
import { ProductService } from 'src/app/core/services/product.service';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchPipe } from 'src/app/core/pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { WishlistService } from 'src/app/core/services/wishlist.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CuttextPipe,
    RouterLink,
    NgxPaginationModule,
    SearchPipe,
    FormsModule,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _Renderer2: Renderer2,
    private _WishlistService: WishlistService
  ) {}

  productlist: Product[] = [];
  wishlistProductId: Product[] = [];
  searchTeam: string = '';
  currentPage: number = 1;
  total: number = 0;
  limit: number = 0;

  ngOnInit(): void {
    this._ProductService.getAllProduct().subscribe({
      next: (response) => {
        console.log(response);
        this.productlist = response.data;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;
        this.limit = response.metadata.limit;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        // console.log('wish', response.data);

        const newData = response.data.map((item: any) => item._id);
        // console.log('map', newData);

        this.wishlistProductId = newData;
      },
    });
  }

  pageChanged(event: any): void {
    // console.log(event);
    this._ProductService.getAllProduct(event).subscribe({
      next: (response) => {
        console.log(response);
        this.productlist = response.data;
        this.currentPage = response.metadata.currentPage;
        this.total = response.results;
        this.limit = response.metadata.limit;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addProduct(ProdId: string, ele: HTMLButtonElement): void {
    this._Renderer2.setAttribute(ele, 'disabled', 'true');

    this._CartService.addToCart(ProdId).subscribe({
      next: (response) => {
        console.log(response);

        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this._Renderer2.removeAttribute(ele, 'disabled');

          this._CartService.cartNumber.next(response.numOfCartItems);
        }
      },
      error: (err) => {
        console.log(err);
        this._Renderer2.removeAttribute(ele, 'disabled');
      },
    });
  }

  // add to whishlist
  addToWishlist(id: string): void {
    this._WishlistService.addProductWishlist(id).subscribe({
      next: (response) => {
        // console.log(response.data.length);
        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });
          this.wishlistProductId = response.data;
          this._WishlistService.wishlistNumber.next(response.data.length);
        }
      },
    });
  }
  // remove from whishlist
  removeFromWishlist(id: string): void {
    this._WishlistService.removeProductWishlist(id).subscribe({
      next: (response) => {
        console.log(response);
        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });

          this.wishlistProductId = response.data;
          this._WishlistService.wishlistNumber.next(response.data.length);
        }
      },
    });
  }
}
