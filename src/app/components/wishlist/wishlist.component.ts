import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistService } from 'src/app/core/services/wishlist.service';
import { Product } from 'src/app/core/interfaces/product';
import { CartService } from 'src/app/core/services/cart.service';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { CuttextPipe } from 'src/app/core/pipe/cuttext.pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink, CuttextPipe],
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private _Renderer2: Renderer2
  ) {}

  productOfWhichlist: Product[] = [];
  wishlistProductId: Product[] = [];

  ngOnInit(): void {
    this._WishlistService.getWishlist().subscribe({
      next: (response) => {
        console.log(response);
        this.productOfWhichlist = response.data;
        const newData = response.data.map((item: any) => item._id);
        this.wishlistProductId = newData;
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

  // removeItem(itemId: string, ele: HTMLButtonElement) {
  //   this._Renderer2.setAttribute(ele, 'disabled', 'true');

  //   this._WishlistService.removeProductWishlist(itemId).subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       if (response.status == 'success') {
  //         Swal.fire({
  //           position: 'top-end',
  //           icon: 'success',
  //           title: response.message,
  //           showConfirmButton: false,
  //           timer: 1500,
  //         });

  //         this.wishlistProductId = response.data;
  //         const newProductData = this.productOfWhichlist.filter((item: any) =>
  //           this.wishlistProductId.includes(item._id)
  //         );
  //         console.log('new', newProductData);
  //         this.productOfWhichlist = newProductData;

  //         this._Renderer2.removeAttribute(ele, 'disabled');
  //         // this._CartService.cartNumber.next(response.numOfCartItems);
  //       }
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this._Renderer2.removeAttribute(ele, 'disabled');
  //     },
  //   });
  // }
  // add to whishlist

  addToWishlist(id: string): void {
    this._WishlistService.addProductWishlist(id).subscribe({
      next: (response) => {
        console.log(response.data);
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
  // remove to whishlist
  removeFromWishlist(id: string): void {
    this._WishlistService.removeProductWishlist(id).subscribe({
      next: (response) => {
        if (response.status == 'success') {
          Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: response.message,
            showConfirmButton: false,
            timer: 1500,
          });

          this.wishlistProductId = response.data;
          const newProductData = this.productOfWhichlist.filter((item: any) =>
            this.wishlistProductId.includes(item._id)
          );
          console.log('new', newProductData);
          this.productOfWhichlist = newProductData;
          this._WishlistService.wishlistNumber.next(response.data.length);

        }
      },
    });
  }
}
